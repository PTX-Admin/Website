import { HStack, Text, VStack, Image, Flex } from '@chakra-ui/react';
import adam from '../../Assets/aboutus/Adam.png';
import bran from '../../Assets/aboutus/Bran.png';
import ck from '../../Assets/aboutus/CK.png';
import neal from '../../Assets/aboutus/Neal.png';
import sally from '../../Assets/aboutus/Sally.png';
import steven from '../../Assets/aboutus/Steven.png';
import bg from '../../Assets/aboutus/bg.jpg';

export default function AboutUs() {
  return (
    <VStack textAlign={'justify'} gap={8} maxWidth={'1200px'}>
      <Text fontWeight={900} fontSize={'50px'}>
        Protocol X Team
      </Text>
      <HStack alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={neal.blurDataURL} src={neal.src} alt="" />
          <Text fontSize={'x-small'}>Neal | USA | 29</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Neal (Shiblord) - Founder/CEO
          </Text>
          <Text fontSize={'small'}>
            Neal is originally from Pennsylvania, but now lives in Texas. Neal joined the US Marine
            Corps after high school, serving roles as an infantry squad leader and a humanitarian
            specialist. After military service, Neal obtained his Bachelor&#39;s degree in Economics
            from Penn State University. Neal began his interest in cryptocurrency in 2018, dipping
            his feet in the waters of mainstream crypto. In May of 2022, Neal moved to crypto as a
            full time career, leading and managing several DeFi protocols on multiple blockchains.
            Neal values his time with those he cares about, his health, and always seeks to bring
            the most to every environment he’s involved in, both personally and professionally.
          </Text>
        </Flex>
      </HStack>
      <HStack alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={bran.blurDataURL} src={bran.src} alt="" />
          <Text fontSize={'x-small'}>Brandon | England | 24</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Brandon (Bran) - Community Manager
          </Text>
          <Text fontSize={'small'}>
            I&#39;m a full time crypto enthusiast and have specialised in Community management,
            moderation and overall project advising for over a year, I first developed my interest
            in crypto early 2020 and have been committed to growing, building and expanding in the
            space since, after adopting early blue chips I then found the world of DeFi in late 2020
            and have been committed to the space since. I&#39;m a very active person and always
            looking to expand my skill set to perform to the best of my ability and will be taking
            the core duties of Community management and overall project development at Protocol X
            and will ensure that I put my all into being able to grow the project and community.
            Never settle for less.
          </Text>
        </Flex>
      </HStack>
      <HStack alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={ck.blurDataURL} src={ck.src} alt="" />
          <Text fontSize={'x-small'}>Jack | USA | 34</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Jack (Crypto Kruelty) - Administration Manager
          </Text>
          <Text fontSize={'small'}>
            Hey there. My name is Jack. I am 34 years old. I&#39;m a single father. I got into DeFi
            in early 2021, and have invested in many projects since. Some good, and some bad. This
            has given me insight on spotting bad actors in the space and protecting others from
            making uninformed choices. I became a Senior Moderator in the first project I invested
            in (SFM) and this opened other doors in the DeFi community to help out in other
            protocols. I have branched off to be a discord administrator, with a focus on bots and
            keeping the community safe from scams, DM&#39;s, etc. I have been full time crypto for
            over a year and love it! The freedom that this has given me has been truly life
            changing. I feel like a better man, able to spend more time with my Daughter, and be
            less stressed. I have been able to connect with a lot of people in DeFi and build those
            networks to make the space a better and safer place to be. DeFi is about building and
            innovating so that we all can have a sustainable future. Let&#39;s raise a drink to
            Protocol X&#39;s continued success!
          </Text>
        </Flex>
      </HStack>

      <HStack alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={steven.blurDataURL} src={steven.src} alt="" />
          <Text fontSize={'x-small'}>Steven | Canada | 33</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Steven (Wox) - Graphics Design / Social Media Specialist
          </Text>
          <Text fontSize={'small'}>
            Dad working from home, Graphic Designer, Marketing Strategist, Musician, Computer
            Builder, Moderator and Crypto Addict. Always been a fan of technology. I developed
            interest in crypto since I started mining ETH almost 2 years ago, then I developed some
            skills in trading, and then I learned (The hard way) DeFi. This was when the first DAO
            launched. I have been in defi since and I&#39;m here to make this space a better place
            for everyone, and being around the best teams in the space! Also a very active person,
            trying to develop new skills in any needed situation. Leaving nothing behind, learning
            new technologies, bringing new ideas. I&#39;m never satisfied with keeping it simple,
            always more & better.
          </Text>
        </Flex>
      </HStack>

      <HStack alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={sally.blurDataURL} src={sally.src} alt="" />
          <Text fontSize={'x-small'}>Jared | USA | 30</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Jared (Sallyczar91) - Advisor
          </Text>
          <Text fontSize={'small'}>
            I&#39;m an Army veteran and current police officer. I have some background in
            programming. When I was in high school I programmed a couple of games, nothing crazy or
            intricate. I wanted to go to school for software engineering but joined the Army instead
            to help pay for schooling. While in the army I started a family and needed to make money
            when I got out so I ended up not going to school and got a job as a police officer. I am
            looking to get into solidity and be a full time developer in crypto. Crypto peaked my
            interest when I looked forward to the future of finance and noticed how versatile it can
            be for everybody around the world.
          </Text>
        </Flex>
      </HStack>

      <HStack pb={20} alignItems={'start'}>
        <Flex
          minW={'140px'}
          pr={5}
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
        >
          <Image fallbackSrc={adam.blurDataURL} src={adam.src} alt="" />
          <Text fontSize={'x-small'}>Adam | England | 23</Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>
            Adam (Adam P) - Lead Mod / Advisor
          </Text>
          <Text fontSize={'small'}>
            I purchased my first cryptocurrency in 2016 and eventually found the DeFi space. Since
            then I have personally invested in many projects and have often been an early investor
            following the progression. With my experience and first hand knowledge I joined
            community management teams and have developed people skills and helping anybody with
            just about any problem they have with cryptocurrency. In my personal life I am a
            qualified Motorsport Engineer and have a passion for fast cars!
          </Text>
        </Flex>
      </HStack>
    </VStack>
  );
}
