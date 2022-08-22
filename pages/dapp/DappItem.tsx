import { VStack, Text } from '@chakra-ui/react';

interface IDappItemProps {
  label: string;
  content: React.ReactNode;
  children?: React.ReactNode;
  bg?: string;
}
export default function DashboadItem({ label, content, children, bg }: IDappItemProps) {
  return (
    <VStack bg={bg} rounded="2xl" p={4}>
      <Text fontWeight={700} fontSize={{ base: '16px', lg: '20px' }} lineHeight={'24px'}>
        {label}
      </Text>
      {content}

      {children}
    </VStack>
  );
}
