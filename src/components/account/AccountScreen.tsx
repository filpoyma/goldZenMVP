import AccountHeader from './AccountHeader';
import AccountLogout from './AccountLogout';
import AccountProfile from './AccountProfile';
import AccountSettings from './AccountSettings';
import AccountStats from './AccountStats';

const AccountScreen = () => (
  <div className="min-h-dvh bg-surface text-on-surface selection:bg-primary-container/30">
    <AccountHeader />
    <main className="mx-auto max-w-content space-y-12 px-6 pb-32 pt-24">
      <AccountProfile />
      <AccountStats />
      <AccountSettings />
      <AccountLogout />
    </main>
  </div>
);

export default AccountScreen;
