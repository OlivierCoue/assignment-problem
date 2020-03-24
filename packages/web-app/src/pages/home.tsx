/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import { Button, TextField } from '@material-ui/core'
import parse from 'csv-parse/lib/sync'

import Layout from '../layouts/default'
import { rootAction, TRootState } from '../store'

interface IProps {}

type TProps = ReturnType<typeof mapStateToProps> & typeof rootAction & IProps

interface IState {
  rawData: string
  projects: string[]
  studentEmails: string[]
  teacherEmails: string[]
  dataLoaded: boolean
}

interface ICsvData {
  studentEmail: string
  project: string
  score: string
  teacherEmail: string
}

export class Home extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = { rawData: '', projects: [], studentEmails: [], teacherEmails: [], dataLoaded: false }
  }

  onLoadDataSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { rawData } = this.state

    const csvDatas = parse(rawData, { columns: true, skip_empty_lines: true, rtrim: true, ltrim: true }) as ICsvData[]
    const projects = csvDatas.map((el) => el.project).filter((project, index, self) => self.indexOf(project) === index)

    const teacherEmails = csvDatas
      .map((el) => el.teacherEmail)
      .filter((teacherEmail, index, self) => self.indexOf(teacherEmail) === index)

    let studentEmails: string[] = []
    csvDatas.forEach((csvData) => {
      studentEmails = studentEmails.concat(csvData.studentEmail.split(';'))
    })
    studentEmails = studentEmails.filter((studentEmail, index, self) => self.indexOf(studentEmail) === index)

    this.setState({ rawData: '', projects, teacherEmails, studentEmails, dataLoaded: true })
  }

  onRawDataChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ rawData: currentTarget.value })
  }

  onLoadNewData = () => {
    this.setState({
      rawData: '',
      dataLoaded: false,
      teacherEmails: [],
      studentEmails: [],
      projects: [],
    })
  }

  render() {
    // generateRoutePath(RoutePath.STORE_DETAILS, { storeUuid: store.uuid })
    const { rawData, dataLoaded, projects, studentEmails, teacherEmails } = this.state

    return (
      <Layout>
        <div>
          <h3>Calculer une nouvelle solution</h3>
          {!dataLoaded && (
            <form onSubmit={this.onLoadDataSubmit}>
              <h5>Données au format csv</h5>
              <TextField
                multiline
                id="standard-multiline-flexible"
                label="Données au format CSV"
                onChange={this.onRawDataChange}
                rowsMax="4"
                value={rawData}
              />
              <Button color="primary" type="submit" variant="outlined">
                Charger les données
              </Button>
            </form>
          )}
          {dataLoaded && (
            <div>
              <h5>Aperçu :</h5>
              <div>Nombre de projets chargés: {projects.length}</div>
              <div>Nombre de d'étudiants chargés: {studentEmails.length}</div>
              <div>Nombre de d'enseignants chargés: {teacherEmails.length}</div>
              <h5>Définir le nombre maximum de projet que chaque enseignant peut encadrer :</h5>
              <ul>
                {teacherEmails.map((teacherEmail) => (
                  <li key={teacherEmail}>
                    <div>{teacherEmail} : </div>
                    <TextField id="standard-number" label="Number" type="number" value={1} />
                  </li>
                ))}
              </ul>
              <div>
                <Button color="primary" variant="outlined" onClick={this.onLoadNewData}>
                  Charger des nouvelles données
                </Button>
                <Button color="primary" variant="outlined">
                  Résoudre
                </Button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

function mapStateToProps({ i18n }: TRootState) {
  return { language: i18n.language }
}

export default connect(
  mapStateToProps,
  rootAction
)(Home)
