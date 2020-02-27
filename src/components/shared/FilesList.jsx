import React from 'react';
import { useTranslation } from 'react-i18next';

const FilesList = ({ data }) => {
  const [t] = useTranslation();

  return data.length > 0
    ? (
      <>
        {data.map((fileObj) => (
          <div key={fileObj.id}>
            <a href={fileObj.file}>{fileObj.file}</a>
          </div>
        ))}
      </>
    ) : (
      <div>{t('no data')}</div>
    );
};

export default FilesList;
