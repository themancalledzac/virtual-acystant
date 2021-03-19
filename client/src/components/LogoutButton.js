import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { useLogout } from "../utils/auth";

function LogoutButton() {

    const logout = useLogout();

    return (
        <ListItem button key={"Logout"} onClick={logout}>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
        </ListItem>
        )

}

export default LogoutButton;