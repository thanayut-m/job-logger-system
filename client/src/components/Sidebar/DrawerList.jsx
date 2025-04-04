import { List, ListItem, ListItemText, ListItemIcon, Collapse } from "@mui/material"
import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from "react-router"
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const DrawerList = ({
    textName,
    to,
    Icon,
    children,
    toggleDrawer
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (children) {
            setOpen(!open);
        } else if (toggleDrawer) {
            toggleDrawer(false);
        }
    };

    return (
        <>
            <ListItem button component={to ? Link : 'div'} to={to} onClick={handleClick}>
                {Icon && (
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                )}
                <ListItemText primary={textName} />
                {children ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
            {children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((child, index) => (
                            <ListItem
                                button
                                component={Link}
                                to={child.to}
                                key={index}
                                sx={{ pl: 4 }}
                            >
                                {child.Icon && (
                                    <ListItemIcon>
                                        <child.Icon />
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={child.textName} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

DrawerList.propTypes = {
    textName: PropTypes.string.isRequired,
    to: PropTypes.string,
    Icon: PropTypes.elementType,
    toggleDrawer: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string.isRequired,
        Icon: PropTypes.elementType,
        textName: PropTypes.string.isRequired,
    }))
}
export default DrawerList