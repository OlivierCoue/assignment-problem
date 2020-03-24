/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import { Button, TextField } from '@material-ui/core'
import parse from 'csv-parse/lib/sync'
import { Fragment_Solution_AllFieldsFragment, SolutionService } from '@assignment-problem/api-client/lib'

import Layout from '../layouts/default'
import { rootAction, TRootState } from '../store'

import SolutionDetails from './solution-details'

interface IProps {}

type TProps = ReturnType<typeof mapStateToProps> & typeof rootAction & IProps

interface IState {
  rawData: string
  csvData: ICsvData[]
  projects: string[]
  studentEmails: string[]
  teacherEmails: string[]
  dataLoaded: boolean
  solutionComputed: boolean
  solution: Fragment_Solution_AllFieldsFragment | null
}

interface ICsvData {
  studentEmail: string
  project: string
  score: number
  teacherEmail: string
}

export class Home extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      rawData: '',
      projects: [],
      studentEmails: [],
      teacherEmails: [],
      dataLoaded: false,
      csvData: [],
      solutionComputed: false,
      solution: null,
    }
  }

  onLoadDataSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { rawData } = this.state

    const csvDatas: ICsvData[] = parse(rawData, {
      columns: true,
      skip_empty_lines: true,
      rtrim: true,
      ltrim: true,
    }).map((rawCsvData: any) => ({
      studentEmail: rawCsvData.studentEmail,
      project: rawCsvData.project,
      score: parseInt(rawCsvData.project),
      teacherEmail: rawCsvData.teacherEmail,
    }))
    const projects = csvDatas.map((el) => el.project).filter((project, index, self) => self.indexOf(project) === index)

    const teacherEmails = csvDatas
      .map((el) => el.teacherEmail)
      .filter((teacherEmail, index, self) => self.indexOf(teacherEmail) === index)

    let studentEmails: string[] = []
    csvDatas.forEach((csvData) => {
      studentEmails = studentEmails.concat(csvData.studentEmail.split(';'))
    })
    studentEmails = studentEmails.filter((studentEmail, index, self) => self.indexOf(studentEmail) === index)

    this.setState({ rawData: '', csvData: [], projects, teacherEmails, studentEmails, dataLoaded: true })
  }

  onRawDataChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ rawData: currentTarget.value })
  }

  onLoadNewData = () => {
    this.setState({
      rawData: '',
      csvData: [],
      dataLoaded: false,
      solutionComputed: false,
      solution: null,
      teacherEmails: [],
      studentEmails: [],
      projects: [],
    })
  }

  onUpdateParams = () => {
    this.setState({
      solutionComputed: false,
      solution: null,
    })
  }

  onComputeSolution = async () => {
    const { csvData } = this.state
    const solution = await SolutionService.compute({ csvData })
    console.log(solution)
    this.setState({ solutionComputed: true, solution })
  }

  render() {
    // generateRoutePath(RoutePath.STORE_DETAILS, { storeUuid: store.uuid })
    const { rawData, dataLoaded, projects, studentEmails, teacherEmails, solutionComputed, solution } = this.state

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
          {dataLoaded && !solutionComputed && (
            <div>
              <h5>Aperçu des données chargées :</h5>
              <div>Nombre de projets : {projects.length}</div>
              <div>Nombre de d'étudiants : {studentEmails.length}</div>
              <div>Nombre de d'enseignants : {teacherEmails.length}</div>
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
                <Button color="primary" onClick={this.onLoadNewData} variant="outlined">
                  Charger des nouvelles données
                </Button>
                <Button color="primary" onClick={this.onComputeSolution} variant="outlined">
                  Résoudre
                </Button>
              </div>
            </div>
          )}
          {solutionComputed && solution && (
            <div>
              <h5>Solution :</h5>
              <SolutionDetails solution={solution} />
              <div>
                <Button color="primary" onClick={this.onLoadNewData} variant="outlined">
                  Charger des nouvelles données
                </Button>
                <Button color="primary" onClick={this.onUpdateParams} variant="outlined">
                  Modifier les paramètres
                </Button>
                <Button color="primary" onClick={this.onLoadNewData} variant="outlined">
                  Sauvegarder la solution
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
