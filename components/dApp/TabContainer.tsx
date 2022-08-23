import { Grid, Text, VStack } from '@chakra-ui/react';
import { IPairsResponse } from '../../config/types';
import { ITab, tabs } from '../../pages/dapp';
import Calculator from './Calculator';
import Dashboard from './Dashboard';
import Vault from './Vault';

interface ITabContainerProps {
  tab: ITab;
  pair: IPairsResponse;
}

export default function TabContainter({ tab, pair }: ITabContainerProps) {
  if (tab === tabs['dashboard'])
    return <Dashboard pairs={pair.pairs} schemaVersion={pair.schemaVersion} />;
  if (tab === tabs['vault']) return <Vault pairs={pair.pairs} schemaVersion={pair.schemaVersion} />;
  if (tab === tabs['calculator'])
    return <Calculator pairs={pair.pairs} schemaVersion={pair.schemaVersion} />;
  return <></>;
}
