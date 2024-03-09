import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { Email_iconIcon } from './Email_iconIcon.js';
import { Location_iconIcon } from './Location_iconIcon.js';
import { Phone_numberIcon } from './Phone_numberIcon.js';
import classes from './Profile_page_design1.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 165:311 */
export const Profile_page_design1: FC<Props> = memo(function Profile_page_design1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.profile_container1}>
        <div className={classes.profile_container1__profile_details_container}>
          <div className={classes.profile_container1__profile_details_container__image}></div>
          <div className={classes.profile_container1__profile_details_container__profile_information}>
            <div className={classes.profile_container1__profile_details_container__profile_information__name}>
              Jonny Den
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__role}>
              Software developer
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__description}>
              Aliquip eu do est nulla consectetur sint ipsum nostrud eiusmod minim. Voluptate dolore commodo adipisicing
              exercitation irure sunt adipisicing eiusmod proident ea mollit Lorem et laborum velit. Aliquip qui ea
              nostrud ipsum quis sint magna voluptate anim laborum dolore tempor ullamco ut. Veniam qui non sint velit
              eiusmod irure do adipisicing sit.{' '}
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__textboxEmail}>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxEmail__email_Icon
                }
              >
                <Email_iconIcon
                  className={
                    classes.profile_container1__profile_details_container__profile_information__textboxEmail__email_Icon__icon
                  }
                />
              </div>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxEmail__email
                }
              >
                johndoe@gmail.com
              </div>
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__textboxMobile}>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxMobile__phone_Number
                }
              >
                <Phone_numberIcon
                  className={
                    classes.profile_container1__profile_details_container__profile_information__textboxMobile__phone_Number__icon2
                  }
                />
              </div>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxMobile___9999999999
                }
              >
                9999999999{' '}
              </div>
            </div>
            <div
              className={classes.profile_container1__profile_details_container__profile_information__textboxLocation}
            >
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxLocation__location_Icon
                }
              >
                <Location_iconIcon
                  className={
                    classes.profile_container1__profile_details_container__profile_information__textboxLocation__location_Icon__icon3
                  }
                />
              </div>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__textboxLocation__address
                }
              >
                76-6,Houston street
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
