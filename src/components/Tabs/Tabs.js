import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  space,
  color,
  borders,
  borderColor
} from 'styled-system'

const Container = styled.div`

`

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`

const NavItem = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px 0;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.colors.gray[3]};
  text-align: center;
  position: relative;
  bottom: -1px;
  flex: 1;

  ${space}
  ${borders}
  ${color}
`

const NavItemActive = NavItem.extend`
  border-bottom: 2px solid ${props => props.theme.colors.primary[4]};
  color: ${props => props.theme.colors.primary[4]};
`

const TabPanel = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.colors.gray[3]};

  ${space}
  ${color}
  ${borders}
  ${borderColor}
`

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: props.activeTab
    }
  }

  clickTab = (activeTab) => {
    this.setState({ activeTab })
  }

  render () {
    const {
      orientation,
      navProps,
      tabProps,
      tabActiveProps,
      panelProps,
      children
    } = this.props

    // if there only one child component,
    // react doesn't pass an array of children
    const tabs = Array.isArray(children)
      ? children : [children]

    return (
      <Container orientation={orientation}>
        <Nav {...navProps}>
          {tabs.map((panel, key) => {
            const isActive = key === this.state.activeTab
            const NavComponent = isActive ? NavItemActive : NavItem

            return (
              <NavComponent
                key={key}
                onClick={() => this.clickTab(key)}
                {...tabProps}
                {...(isActive ? tabActiveProps : {})}>
                {panel.props.label}
              </NavComponent>
            )
          })}
        </Nav>

        <TabPanel {...panelProps}>
          {tabs[this.state.activeTab]}
        </TabPanel>
      </Container>
    )
  }
}

Tabs.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  activeTab: PropTypes.number,
  navProps: PropTypes.object,
  tabProps: PropTypes.object,
  tabActiveProps: PropTypes.object,
  panelProps: PropTypes.object
}

Tabs.defaultProps = {
  orientation: 'vertical',
  activeTab: 0,
  tabProps: {

  },
  tabActiveProps: {

  },
  panelProps: {

  }
}

export default Tabs
