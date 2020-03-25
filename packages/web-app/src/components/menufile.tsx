import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze'
import { Menu, Button, MenuItem } from '@material-ui/core'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { rootAction, TRootState } from '../store'
import { generateRoutePath, RoutePath } from '../app/router-config'

interface IProps {}

type TProps = ReturnType<typeof mapStateToProps> & typeof rootAction & IProps

interface IState {
  openMenu: Boolean | false
  anchor: any
}

class MenuFile extends React.Component<TProps, IState> {
  constructor(props: TProps) {
    super(props)
    // eslint-disable-next-line react/state-in-constructor
    this.state = { openMenu: false, anchor: null }
  }

  toggleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { openMenu } = this.state
    this.setState({
      openMenu: !openMenu,
      anchor: event.currentTarget,
    })
  }

  onLogoutClicked = () => {
    const { authLogoutRequest } = this.props
    authLogoutRequest()
  }

  onUserListClicked = () => {
    window.document.location.href = generateRoutePath(RoutePath.SOLUTION_LIST, {})
  }

  render() {
    const { openMenu, anchor } = this.state

    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.toggleMenu}>
          <MenuIcon />
        </Button>
        <Menu
          keepMounted
          anchorEl={anchor}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id="simple-menu"
          onClose={this.toggleMenu}
          open={Boolean(openMenu)}
        >
          <div>
            <MenuItem onClick={this.onUserListClicked}>Solutions enregistrées</MenuItem>
            <MenuItem onClick={this.onLogoutClicked}>Se déconnecter</MenuItem>
          </div>
        </Menu>
      </div>
    )
  }
}

const MenuIcon = styled(DehazeIcon)`
  color: white;
`

function mapStateToProps({ user }: TRootState) {
  return { currentUser: user.current }
}

export default connect(
  mapStateToProps,
  rootAction
)(MenuFile)
