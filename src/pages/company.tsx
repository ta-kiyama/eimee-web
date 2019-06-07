import * as React from "react";
import Helmet from "@/components/Helmet";
import CommonHeaderBlock from "@/components/Molecule/CommonHeaderBlock";
import PageContentsWrapper from "@/components/Atom/PageContentsWrapper";
import Breadcrumbs from "@/components/Molecule/Breadcrumbs";
import Tab from "@/components/Molecule/Tab";
import CompanySummary from "@/components/Organism/CompanySummary";

type CompanyTabState = "summary" | "history";

const IndexPage = () => (
  <>
    <Helmet title="会社概要" />
    <CommonHeaderBlock
      title="Company"
      ruby="会社概要"
      color="#ec7e6f"
      src="/assets/img/ph_top_company.jpg"
    />
    <Breadcrumbs name="company" />
    <PageContentsWrapper>
      <Tab<CompanyTabState> selected="summary">
        <Tab.Menu<CompanyTabState>>
          {({ Menu }) => (
            <>
              <Menu tag="summary">会社概要</Menu>
              <Menu tag="history">沿革</Menu>
            </>
          )}
        </Tab.Menu>
        <Tab.Body<CompanyTabState> tag="summary">
          <CompanySummary />
        </Tab.Body>
        <Tab.Body<CompanyTabState> tag="history" />
      </Tab>
    </PageContentsWrapper>
  </>
);

export default IndexPage;
