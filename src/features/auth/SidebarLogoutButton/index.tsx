import logoutAction from '@/actions/logoutAction';
import SidebarButton from '@/features/mypage/SidebarButton';

const SidebarLogoutButton = () => {
  return (
    <form action={logoutAction}>
      <SidebarButton warning type="submit">
        로그아웃
      </SidebarButton>
    </form>
  );
};

export default SidebarLogoutButton;
