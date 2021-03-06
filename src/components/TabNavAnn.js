import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const logOut = createLabel("home", "Log out")
const studentList = createLabel("users", "Students")
const reminder = createLabel("bell", "Reminder")

const panes = [
  { menuItem: <Menu.Item key='protected' as={Nav} to={`/protected`} content={studentList} className="tab-link"/> },
  { menuItem: <Menu.Item key='reminders' as={Nav} to={`/reminders`} content={reminder} className="tab-link" />},
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={logOut}  className="tab-link" /> }
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav