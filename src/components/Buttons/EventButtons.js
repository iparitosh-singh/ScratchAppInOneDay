import React from 'react';
import Icon from '../Icon';

export const StartClicked = () => {
      return (
          <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              {"When "}
              <Icon name="flag" size={15} className="text-green-600 mx-2" />
              {"clicked"}
          </div>
      )
}

export const StripeClicked = () => {
    return (
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
    )
}