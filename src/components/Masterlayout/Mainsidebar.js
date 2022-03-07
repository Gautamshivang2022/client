import React from 'react';
import { Link } from 'react-router-dom';



export default function Sidebar() {
  return <div>
    <nav
      class="sb-sidenav accordion sb-sidenav-light vh-100"
      id="sidenavAccordion"
    >
      <div class="sb-sidenav-menu">
        <div class="nav ">
          <Link class="nav-link" href="">

            <div class="sb-nav-link-icon">
              <i class="fas fa-users"></i>
            </div>
            Show Participents
          </Link>

        </div>
        <div class="nav ">
          <Link class="nav-link" href="">

            <div class="sb-nav-link-icon">
              <i class=" fas fa-video"></i>
            </div>
            Create meeting
          </Link>
         
        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Turn Off Incoming Video
          </a>

        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fal fa-images"></i>
            </div>
            Background Effect
          </a>

        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fas fa-exchange-alt"></i>
            </div>
            Transfer
          </a>
        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fas fa-pause"></i>
            </div>
            Hold
          </a>
        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fas fa-comments"></i>
            </div>
            Show Conversation
          </a>
        </div>
        <div class="nav">
          <a class="nav-link" href="">
            <div class="sb-nav-link-icon">
              <i class="fas fa-cogs"></i>
            </div>
            Device Setting
          </a>
        </div>
      </div>
    </nav>
  </div>;
}
