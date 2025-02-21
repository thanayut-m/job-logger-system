import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import PropTypes from 'prop-types';
import { Link } from "react-router"

const DrawerList = ({
    textName,
    to,
    Icon
}) => {
    return (
        <Link to={to}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon className="text-xl" />
                        </ListItemIcon>
                        <ListItemText
                            primary={textName}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Link>
    )
}

DrawerList.propTypes = {
    textName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
}
export default DrawerList