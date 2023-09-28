import * as React from 'react';
import { MantineProvider, createTheme, Container, Flex, Title, Text, Grid, Stack, Divider, NumberInput, Button } from '@mantine/core';
import { VisualizeOptionsPage } from './visualizeOptionsPage';
import { Header } from '../components/header'
import metal_frames from '../resources/metal_frames.jpeg'
import { PrescriptionSelect } from '../components/prescriptionSelect';
import { AxisInput } from '../components/axisInput';
export function HomePage() {

  /*
  const [data, setData] = React.useState({
    name: ''
  });

  React.useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch('/data').then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setData({
          name: data.Name
        });
      })
    );
  }, []);
*/
  const backgroundStyle = {
    backgroundImage: `url(${metal_frames})`,
    backgroundSize: '50% auto',
    backgroundPosition: 'right 0 top 2em',
    backgroundRepeat: 'no-repeat'
  };
  const renderHomePage = () => {
    return (
      <div style={backgroundStyle} h='100%'>
        <Header />
        <Flex direction='column' pt='3em' pl='3em' gap='1em' >
          <Text fz='xl' fw='500'>Discover your ideal lens and frame match today!</Text>
          <Text fz='lg' fs="italic" pt='1.5em'>Get started now:</Text>
          <Title order={1}>Prescription</Title>
          <Container ml='0' pl='2em' w='60em' h='auto' justify='flex-start'>
            <Grid>
              <Grid.Col span={1} pt='3.25em'>
                <Stack gap='0'>
                  <Text fz='md' fw='250'>OD</Text>
                  <Text lh='0.5' fz='xs' fw='250'>(Right)</Text>
                </Stack>
                <Stack gap='0' pt='1.35em'>
                  <Text fz='md' fw='250'>OS</Text>
                  <Text lh='0.5' fz='xs' fw='250'>(Left)</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={3}>
                <Stack gap='0.5em'>
                  <Text fz='md' fw='250'>Sphere (SPH)</Text>
                  <PrescriptionSelect></PrescriptionSelect>
                  <PrescriptionSelect></PrescriptionSelect>
                </Stack>
              </Grid.Col>
              <Grid.Col span={3}>
                <Stack gap='0.5em'>
                  <Text fz='md' fw='250'>Cylinder (CYL)</Text>
                  <PrescriptionSelect></PrescriptionSelect>
                  <PrescriptionSelect></PrescriptionSelect>
                </Stack>
              </Grid.Col>
              <Grid.Col span={3}>
                <Stack gap='0.5em'>
                  <Text fz='md' fw='250'>Axis</Text>
                  <AxisInput></AxisInput>
                  <AxisInput></AxisInput>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
          <Divider mt='3em' size='xs' w='50em' />

          <Title order={1} pt='1em'>PD (Pupillary distance)</Title>
          <NumberInput
            pt='0.5em'
            label=''
            w = '10em'
            defaultValue={63}
            min={50}
            max={80}
            placeholder={0} />
          <Button ml='47em' h='3em' w='10em'>Continue</Button>
          <VisualizeOptionsPage />
        </Flex>
      </div>
    )
  }

  return (
    <MantineProvider theme={theme}>
      {renderHomePage()}
    </MantineProvider>
  );

}

const theme = createTheme({
  primaryColor: 'muteBlue',
  fontFamily: 'Inter',
  fontSizes: {
    xs: '0.5em',
    sm: '0.875em',
    md: '1em',
    lg: '1.5em',
    xl: '1.75em'
  },
  headings: {
    fontFamily: 'Jomolhari',
    sizes: {
      h1: { fontWeight: '300', fontSize: '1.25em' }
    },
  },
  colors: {
    'muteBlue': [
      '#ecf6ff',
      '#dee8f1',
      '#bfcedc',
      '#9cb3c8',
      '#7f9db6',
      '#6c8eac',
      '#6287a8',
      '#507493',
      '#446785',
      '#335a77'
    ],
    'beige': [
      "#fcf8ee",
      "#f6efdd",
      "#eeddb3",
      "#e5ca86",
      "#deb961",
      "#d9af4a",
      "#d7aa3c",
      "#be942f",
      "#a98427",
      "#93711b"
    ]
  }
});