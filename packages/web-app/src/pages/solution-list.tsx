/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { connect } from 'react-redux'
import { Fragment_Solution_FieldsFragment, OrderByEnum, SolutionService } from '@assignment-problem/api-client/lib'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Layout from '../layouts/default'
import { rootAction, TRootState } from '../store'
import { generateRoutePath, RoutePath } from '../app/router-config'

interface IProps {}

type TProps = ReturnType<typeof mapStateToProps> & typeof rootAction & IProps

interface IState {
  solutions: Fragment_Solution_FieldsFragment[]
}

export class SolutionList extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = { solutions: [] }
  }

  componentDidMount(): void {
    this.loadSolution()
  }

  async loadSolution() {
    const solutions = await SolutionService.findMany({ order: { createdAt: OrderByEnum.Desc } })
    this.setState({ solutions })
  }

  render() {
    const { solutions } = this.state

    return (
      <Layout>
        <div>
          <h3>Liste des solutions sauvegardées</h3>
          <MyTable>
            <tbody>
              <tr>
                <th>Nom</th>
                <th>Date de création</th>
                <th>Consulter</th>
              </tr>
              {solutions &&
                solutions.map(
                  (solution) =>
                    solution.uuid && (
                      <tr key={solution.uuid}>
                        <NameCell>{solution.name}</NameCell>
                        <CreatedAtCell>{solution.createdAt}</CreatedAtCell>
                        <MoreInfoCell>
                          <Link to={generateRoutePath(RoutePath.SOLUTION_DETAILS, { solutionUuid: solution.uuid })}>
                            Consulter
                          </Link>
                        </MoreInfoCell>
                      </tr>
                    )
                )}
            </tbody>
          </MyTable>
        </div>
      </Layout>
    )
  }
}

const MyTable = styled.table`
  th,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
  }
`

const NameCell = styled.td`
  width: 100px;
`

const CreatedAtCell = styled.td`
  width: 200px;
`

const MoreInfoCell = styled.td`
  width: 100px;
`

function mapStateToProps({ i18n }: TRootState) {
  return { language: i18n.language }
}

export default connect(
  mapStateToProps,
  rootAction
)(SolutionList)
