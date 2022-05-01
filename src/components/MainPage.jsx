import { Page, Layout, Card } from "@shopify/polaris";

export function MainPage() {
    return (
        <Page title="Product Tags">
            <Layout>
                <Layout.Section oneHalf>
                    <Card title="Product Name" sectioned><p>sample text</p></Card>
                </Layout.Section>
                <Layout.Section oneHalf>
                    <Card title="Product Name" sectioned><p>sample text</p></Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
  }