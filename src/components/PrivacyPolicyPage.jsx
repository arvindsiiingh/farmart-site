import LegalPolicyPage from './LegalPolicyPage';
import { privacyPolicyMeta, privacyPolicySections } from '../content/privacyPolicy';

export default function PrivacyPolicyPage() {
  return <LegalPolicyPage meta={privacyPolicyMeta} sections={privacyPolicySections} activeLegalLink="privacy" />;
}
