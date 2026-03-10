import LegalPolicyPage from './LegalPolicyPage';
import { csrPolicyMeta, csrPolicySections } from '../content/csrPolicy';

export default function CsrPolicyPage() {
  return <LegalPolicyPage meta={csrPolicyMeta} sections={csrPolicySections} activeLegalLink="csr" />;
}
