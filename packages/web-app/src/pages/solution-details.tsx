/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { connect } from 'react-redux'
import { Fragment_Solution_AllFieldsFragment } from '@assignment-problem/api-client/lib'

import { rootAction, TRootState } from '../store'

interface IProps {
  solution: Fragment_Solution_AllFieldsFragment
}

type TProps = ReturnType<typeof mapStateToProps> & typeof rootAction & IProps

interface IState {}

export class SolutionDetails extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = {}
  }

  render() {
    const { solution } = this.props

    return (
      <div>
        <ul>
          {solution.projectAssignments &&
            solution.projectAssignments.map(
              (projectAssignment) =>
                projectAssignment && (
                  <li key={projectAssignment && projectAssignment.studentOneEmail}>
                    etudiant1 : {projectAssignment.studentOneEmail} etudiant2 : {projectAssignment.studentTwoEmail}{' '}
                    projet : {projectAssignment.projectName}
                  </li>
                )
            )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ i18n }: TRootState) {
  return { language: i18n.language }
}

export default connect(
  mapStateToProps,
  rootAction
)(SolutionDetails)
