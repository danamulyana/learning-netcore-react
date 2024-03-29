import { Tab, TabPane } from "semantic-ui-react";
import ProfilePhoto from "./ProfilePhoto";
import { observer } from "mobx-react-lite";
import ProfileAbout from "./ProfileAbout";
import { Profile } from "../../app/models/profile";

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({profile} : Props){
    const panes = [
        {menuItem: 'About', render: () => <ProfileAbout />},
        {menuItem: 'Photos', render: () => <ProfilePhoto profile={profile} />},
        {menuItem: 'Events', render: () => <TabPane>Event Content</TabPane>},
        {menuItem: 'Followers', render: () => <TabPane>Followers Content</TabPane>},
        {menuItem: 'Following', render: () => <TabPane>Following Content</TabPane>},
    ]
    return(
        <Tab 
            menu={{ fluid: true, vertical: true }}
            menuPosition="right"
            panes={panes}
        />
    );
})