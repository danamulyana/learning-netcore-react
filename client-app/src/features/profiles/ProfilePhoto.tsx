import { observer } from "mobx-react-lite"
import { Card, Header, TabPane,Image } from "semantic-ui-react"
import { Profile } from "../../app/models/profile"

interface Props {
    profile: Profile;
}
export default observer(function ProfilePhoto({profile} : Props){
    return(
        <TabPane>
            <Header icon='image' content='Photos' />
            <Card.Group itemsPerRow={5}>
                {profile.Photos?.map(photo => (
                    <Card key={photo.id}>
                        <Image src={photo.url} />
                    </Card>
                ))}
            </Card.Group>
        </TabPane>
    )
})