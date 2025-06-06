import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import SignIn from "../page/Auth/SignIn/SignIn";
import Otp from "../page/Auth/Otp/Otp";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import OverviewPage from "../page/Overview/OverviewPage";
import SessionPage from "../page/Session/SessionPage";
import SessionDetailsPage from "../page/SessionDetails/SessopmDeatailsPage";
import ProfileSettingsPage from "../page/ProfileSetting/ProfileSettingPage";
import UserPage from "../page/Users/UsersPage";
import SettingPage from "../page/setting/SettingPage";
import CoustomerPage from "../page/Coustomer/CoustomerPage";
import Company from "../component/Main/Company/Company";
import CompanyPage from "../page/Company/ComapnyPage";
import CompanyProviderPage from "../page/CompanyProvide/CompanyProvidePage";
import PersonalProviderPage from "../page/PersonalProvider/PersonalProviderPage";
import ServicePage from "../page/Service/ServicePage";
import AddServicePage from "../page/AddService/AddServicePage";
import BookingPage from "../page/Booking/BookingPage";
import TransactionPage from "../page/Transaction/Transactionpage";
import TransitionDetailsPage from "../page/TransitionDetails/TransitionDetails";
import GeneralSettingPage from "../page/setting/GeneralSetting/GeneralSettingPage";
import EditeProfilePage from "../page/setting/EditeProfile/EditeProfilePage";
import ChangePasswordPage from "../page/setting/ChangePassword/ChangePasswordPage";
import AboutPage from "../page/setting/AboutUs/AboutPage";
import TramsConditonPage from "../page/setting/TramsCondition/TramsConditionPage";
import PrivacyPolicyPage from "../page/setting/PrivacyPolicy/PrivacyPolicyPage";
import SubscriptionPage from "../page/setting/Subsciption/SubscriptionPage";
import AddSubscriptionPage from "../page/setting/AddSubscription/AddSubscriptionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes >

      // </AdminRoutes>
      <MainLayout />
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path:"/Customer",
        element:<CoustomerPage/>
      },
      {
        path:"/company",
        element:<CompanyPage/>
      },
      {
        path:"/company-provider",
        element:<CompanyProviderPage/>
      },
      {
        path:"/personal-provider",
        element:<PersonalProviderPage/>
      },
      {
        path:"/service",
        element:<ServicePage/>
      },
      {
        path:"/add-service",
        element:<AddServicePage/>
      },
      {
        path:"/booking",
        element:<BookingPage/>
      },
      {
        path:"/transcation",
        element:<TransactionPage/>
      },
      {
        path:"/transcation-details",
        element:<TransitionDetailsPage/>
      },
      {
        path:"/Analisiys",
        element:<SessionDetailsPage/>
      },

      {
        path:'/profile',
        element:<ProfileSettingsPage/>
      },
      {
        path:'/user',
        element:<UserPage/>
      },
      {
        path:'/setting',
        element:<SettingPage/>
      },
      {
        path:'/general-setting',
        element:<GeneralSettingPage/>
      },
      {
        path:'/edite-profile',
        element:<EditeProfilePage/>
      },
      {
        path:'/change-password',
        element:<ChangePasswordPage/>
      },
      {
        path:'/about-us',
        element:<AboutPage/>
      },
      {
        path:'/trams-condition',
        element:<TramsConditonPage/>
      },
      {
        path:'/privacy-policy',
        element:<PrivacyPolicyPage/>
      },
      {
        path:'/privacy-policy',
        element:<PrivacyPolicyPage/>
      },
      {
        path:'/subscription',
        element:<SubscriptionPage/>
      },
      {
        path:'/add-subscription',
        element:<AddSubscriptionPage/>
      },



    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;


