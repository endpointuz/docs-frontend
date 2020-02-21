import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ContentHeader = () => {
  const [t] = useTranslation();
  const headerTitle = useSelector((state) => state.dashboardUi.headerTitle);
  const headerPageName = useSelector((state) => state.dashboardUi.headerPageName);

  return (
    <div className="dashboard-header-page">
      <p className="dashboard-header-page-name">{t(headerPageName)}</p>
      <h2 className="dashboard-header-page-title">{t(headerTitle)}</h2>
    </div>
  );
}

export default ContentHeader;
