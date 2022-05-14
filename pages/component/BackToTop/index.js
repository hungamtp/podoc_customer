import React from 'react';
import ArrowUp from '../../icon/ArrowUp';

function BackToTop() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <a href="#" onClick={topFunction} id="back-to-top" class="back-to-top fs-5">
      <i class="fea icon-sm icons align-middle">
        <ArrowUp />
      </i>
    </a>
  );
}

export default BackToTop;
