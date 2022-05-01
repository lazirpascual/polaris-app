import { Page, Layout, Card } from "@shopify/polaris";

export function MainPage() {
  return (
    <Page title="Product Tags">
      <Layout>
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
