import { observer } from "mobx-react-lite"
import { Card, Header, TabPane,Image, Grid, Button } from "semantic-ui-react"
import { Profile } from "../../app/models/profile"
import { useStore } from "../../app/stores/store";
import { useState } from "react";
import PhotoUploadWidget from "../../app/common/imageUpload/PhotoUploadWidget";

interface Props {
    profile: Profile;
}
export default observer(function ProfilePhoto({profile} : Props){
    const { profileStore: { isCurrentUser } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);

    return(
        <TabPane>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated='left' icon='image' content='Photos' />
                    {isCurrentUser && (
                        <Button floated="right" basic
                            content={addPhotoMode ? 'Cancel' : 'Add Photo'}
                            onClick={() => setAddPhotoMode(!addPhotoMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width={16}>
                        {addPhotoMode ? (
                            <PhotoUploadWidget />
                        ) : (
                            <Card.Group itemsPerRow={5}>
                                {profile.Photos?.map(photo => (
                                    <Card key={photo.id}>
                                        <Image src={photo.url} />
                                    </Card>
                                ))}
                            </Card.Group>
                        )}
                </Grid.Column>
            </Grid>
        </TabPane>
    )
})