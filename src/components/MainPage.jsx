import {
  Page,
  Layout,
  Card,
  Tag,
  Stack,
  TextField,
  Button,
} from "@shopify/polaris";

export function MainPage() {
  return (
    <Page title="Product Tags">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Online store dashboard">
            <Card.Section>
              <Stack>
                <Tag onRemove={() => console.log("Tag Clicked!")}>Test Tag</Tag>
                <Tag onRemove={() => console.log("Tag Clicked!")}>Test Tag</Tag>
              </Stack>
            </Card.Section>
            <Card.Section>
              <Stack distribution="equalSpacing">
                <TextField autoComplete="off" />
                <Button primary>Add Tag</Button>
              </Stack>
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Online store dashboard">
            <Card.Section>
              <Stack>
                <Tag onRemove={() => console.log("Tag Clicked!")}>Test Tag</Tag>
                <Tag onRemove={() => console.log("Tag Clicked!")}>Test Tag</Tag>
              </Stack>
            </Card.Section>
            <Card.Section>
              <Stack distribution="equalSpacing">
                <TextField autoComplete="off" />
                <Button primary>Add Tag</Button>
              </Stack>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
