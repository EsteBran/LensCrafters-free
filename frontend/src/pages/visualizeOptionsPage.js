import * as React from 'react';
import { Modal, Text, Stack, Button, Flex } from '@mantine/core';
import { IconView360 } from '@tabler/icons-react';
import NewWayfarerRayban from '../resources/new_wayfarer_rayban.glb';
import '@google/model-viewer/dist/model-viewer';

export function VisualizeOptionsPage() {

    const [opened3D, setOpened3D] = React.useState(false);
    const model_viewer_style = {
        width: 'auto',
        height: '37em'
    }
    return (
        <>
            <Modal opened={opened3D} onClose={() => setOpened3D(false)} size='70em' radius='1' padding='0'>
                {
                    <Stack padding='0' gap='0'>
                        <model-viewer style={model_viewer_style} src={NewWayfarerRayban} camera-controls auto-rotate />
                        <Flex align='center' justify='space-between' bg='#FBF6E9' h='4em' w='100%' gap='sm' px='1em'>
                            <Text size='sm' fs='italic' padding='1em'>Lens material:</Text>
                            <Flex align='center' gap='md'>
                                <Text size='sm'>Frame #1</Text>
                                <Button variant='filled'>Change Selection</Button>
                            </Flex>
                        </Flex>
                    </Stack>
                }
            </Modal>
            <Flex mr='2em' justify='flex-end' align='bottom'>
                <Button variant='outline' leftSection={<IconView360 size={14} />} onClick={() => setOpened3D(true)}>View</Button>
            </Flex>
        </>
    );
}