import { Page, Layout, Card, Tag, Stack, TextField } from "@shopify/polaris";

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
              <TextField autoComplete="off" />
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Online store dashboard">
            <Card.Section>
              <p>View a summary of your online store’s performance.</p>
            </Card.Section>
            <Card.Section>
              <p>
                View a summary of your online store’s performance, including
                sales, visitors, top products, and referrals.
              </p>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
