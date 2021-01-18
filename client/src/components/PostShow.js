import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

function PostShow(props) {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="title"/>
                <RichTextField source="body"/>
                <TextField label="Published At" source="published"/>
            </SimpleShowLayout>
        </Show>
    )
}

export default PostShow
