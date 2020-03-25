/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { connect } from 'react-redux'
import { Fragment_Solution_AllFieldsFragment, SolutionService } from '@assignment-problem/api-client/lib'
import { RouteComponentProps } from 'react-router-dom'

import Layout from '../layouts/default'
import { rootAction, TRootState } from '../store'
import SolutionDetails from './solution-details'
interface IProps {}

type TProps = ReturnType<typeof mapStateToProps> &
  typeof rootAction &
  IProps &
  RouteComponentProps<{ solutionUuid: string }>

interface IState {
  solution: Fragment_Solution_AllFieldsFragment | null
}

export class SolutionDetailsPage extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = { solution: null }
  }

  componentDidMount(): void {
    this.loadSolution()
  }

  async loadSolution() {
    const {
      match: {
        params: { solutionUuid },
      },
    } = this.props
    const solution = await SolutionService.findOne({ where: { uuid: solutionUuid } })
    this.setState({ solution })
  }

  render() {
    const { solution } = this.state

    if (!solution) return null

    return (
      <Layout>
        <div>
          <h5>Solution : {solution.name}</h5>
          <SolutionDetails solution={solution} />
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
)(SolutionDetailsPage)
