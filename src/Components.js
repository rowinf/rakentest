import React from 'react'
import styled from 'styled-components'

const colors = {
  active: 'orange',
  darkGrey: '#b9b9b9',
  baseBg: '#f3f3f3',
  mediumBg: '#d8d8d8',
  darkBg: '#b3b3b3',
  baseBorder: '#e4e4e4',
  lightBorder: '#ececec'
}

const spacing = {
  navItem: '0px 12px'
}

export const Bar = styled.div`
  height: 64px;
  background-color: ${colors.baseBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap
`

export const Title = styled.div`
  text-transform: uppercase;
  padding: ${spacing.navItem};
  flex: 0 0 200px;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export const Profile = styled.div`
  flex: 0 0 200px;
  border-left: 1px solid ${colors.baseBorder};
  padding: ${spacing.navItem};
`

export const ListItem = styled.li`
  display: inline-block;
  padding: ${spacing.navItem};
  text-transform: uppercase;
  :hover {
    color: ${colors.active};
  }
`

const DropdownMenuListWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: ${props => props.active ? 'block' : 'none'};
`

const Badge = styled.div`
  background-color: ${colors.active};
  border-radius: 50%;
  min-width: 16px;
  color: white;
  padding: 4px;
`

export const DropdownMenuList = styled.ul`
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 240px;
  box-shadow: 0 0 16px 0 rgba(0,0,0,.25);
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    position: relative;
    text-transform: uppercase;
  }
  li:last-child:after, li:hover:after {
    border-color: transparent;
  }
  li:hover {
    background-color: ${colors.darkBg};
    box-shadow: inset 0 6px 6px -6px rgba(0,0,0,.25);
  }
  li:after {
    border-bottom: 1px solid ${colors.lightBorder};
    height: 2px;
    position: absolute;
    content: ' ';
    left: 10px;
    right: 10px;
    bottom: 0;
  }
`

const MenuWrapper = styled.div`
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  overflow: visible;
  right: 0;
`

export class DropdownMenu extends React.Component {
  state = {
    active: false
  }
  toggle = () => {
    this.setState(props => ({active: !props.active}))
  }
  render() {
    const {dropdownItems, children, items, className} = this.props
    const { active } = this.state
    return (
      <div className={className} onClick={this.toggle}>
        <div>
          {children}
        </div>
        <MenuWrapper>
          <DropdownMenuListWrapper active={active}>
            <DropdownMenuList>
              {items.map((item, i) => (
                <li key={i}>
                  {item.countable
                    ? [<div>{item.name}</div>,<Badge>{item.count}</Badge>]
                    : <div>{item.name}</div>
                  }
                </li>
              ))}
            </DropdownMenuList>
          </DropdownMenuListWrapper>
        </MenuWrapper>
      </div>
    )
  }
}
