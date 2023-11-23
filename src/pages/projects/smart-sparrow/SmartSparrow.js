import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-large.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageFoodShop from 'assets/shopify.png';
import imageFoodShopLarge from 'assets/shopify-large.png';
import imageDentist from 'assets/dentist.png';
import imageDentistLarge from 'assets/dentist-large.png';
import imageWeblyStudio from 'assets/weblystudio.png';
import imageWeblyStudioLarge from 'assets/weblystudio-large.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-dark-large.jpg';
import imagePhysio from 'assets/physio.png';
import imagePhysioLarge from 'assets/physio-large.png';
import imageK2Food from 'assets/FoodShop.png';
import imageK2FoodLarge from 'assets/FoodShop-large.png';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Family Traveller';
const description =
  'Our goal is to help you choose a holiday that your family will enjoy, whether you are travelling with toddlers or teenagers, babies or grandparents. The difference between us and other travel sites is that we are tailor made for you.';
const roles = ['Front End Development', 'UX and UI Design', 'Motion Design'];
const url = 'https://familytraveller.com/';

const title1 = 'FoodOnline';
const description1 =
  'An online food ordering system allows your business to accept and manage orders placed online for delivery or takeaway. Customers browse a digital menu, either on an app or website and place and pay for their order online.';
const roles1 = ['Front End Development', 'UX and UI Design', 'Motion Design'];
const url1 = 'https://food2-iota.vercel.app/';

const title2 = 'Dentist';
const description2 =
  'Glee Dentistry specialize in many forms of dentistry. From cosmetic dentistry to restorative surgeries and emergencies.';
const roles2 = ['Front End Development', 'UX and UI Design'];
const url2 = 'https://gleedentistry.com/';

const title3 = 'Webly Studio';
const description3 =
  'We are a multidisciplinary creative studio. We work together to design, create and produce work that we are proud of for folks that we believe in.';
const roles3 = ['Front End Development', 'UX and UI Design'];
const url3 = 'https://weblystudio.com/';

const title4 = 'Know Your Physio';
const description4 =
  'At Know Your Physio, we believe in unparalleled authenticity, and that discovering your science is the ultimate way to optimize your life.';
const roles4 = ['Front End Development', 'UX and UI Design'];
const url4 = 'https://knowyourphysio.org/';

const title5 = 'K2 Foods';
const description5 =
  'We have been serving the freshest nuts, seeds, dried fruit, and snacks online across the country. We take pride in serving both big and small customers.';
const roles5 = ['Front End Development', 'UX and UI Design'];
const url5 = 'https://k2foods.pk/';

const jsonArray = [
  {
    id: 0,
    title: title,
    description: description,
    roles: roles,
    url: url,
    image: imageSprLessonBuilderDark,
    imageLarge: imageSprLessonBuilderDarkLarge,
  },
  {
    id: 1,
    title: title1,
    description: description1,
    roles: roles1,
    url: url1,
    image: imageFoodShop,
    imageLarge: imageFoodShopLarge,
  },
  {
    id: 2,
    title: title2,
    description: description2,
    roles: roles2,
    url: url2,
    image: imageDentist,
    imageLarge: imageDentistLarge,
  },
  {
    id: 3,
    title: title3,
    description: description3,
    roles: roles3,
    url: url3,
    image: imageWeblyStudio,
    imageLarge: imageWeblyStudioLarge,
  },
  {
    id: 4,
    title: title4,
    description: description4,
    roles: roles4,
    url: url4,
    image: imagePhysio,
    imageLarge: imagePhysioLarge,
  },
  {
    id: 5,
    title: title5,
    description: description5,
    roles: roles5,
    url: url5,
    image: imageK2Food,
    imageLarge: imageK2FoodLarge,
  },
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        {jsonArray.map(item => (
          <div key={item.id}>
            <ProjectHeader
              title={item.title}
              description={item.description}
              url={item.url}
              roles={item.roles}
            />
            <ProjectSection padding="top">
              <ProjectSectionContent>
                <ProjectImage
                  raised
                  key={themeId}
                  srcSet={
                    isDark ? [item.image, item.imageLarge] : [item.image, item.imageLarge]
                  }
                  placeholder={
                    isDark
                      ? imageSprLessonBuilderDarkPlaceholder
                      : imageSprLessonBuilderLightPlaceholder
                  }
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                  alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
                />
              </ProjectSectionContent>
            </ProjectSection>
          </div>
        ))}
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Next-generation learning experiences
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      The flexibility of the product allowed for developers to create
                      engaging interactive experiences as highly configurable plugins that
                      could then be used and manipulated by learning designers.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interactivity
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They’re also able to click and drag to orbit around
                      and freely explore at any time.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Animation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately the project was successful after Smart Sparrow and the aero
                platform were{' '}
                <Link href="https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html">
                  acquired by Pearson in 2020
                </Link>{' '}
                to become a foundation for their next generation learning platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
