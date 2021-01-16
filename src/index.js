import "bootstrap";
import "jquery";
import 'waypoints/lib/noframework.waypoints';
import counterUp from 'counterup2';

import { run } from './app/app';
import "./sass/main.scss";

import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';

const alertService = new AlertService();
const componentService = new ComponentService();

//run(alertService, componentService);

const el = [...document.querySelectorAll('[data-toggle="counter-up"]')];

el.forEach(e => {
    new Waypoint( {
        element: e,
        handler: function() { 
            counterUp( e ) 
            this.destroy()
        },
        offset: 'bottom-in-view',
    } )
    
})


// Skills Section
// const skillsEl = document.querySelector('.skills__content');

// $('.skills__content').waypoint(function() {
//     $('.progress .progress-bar').each(function() {
//       $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
//   }, {
//     offset: '80%'
//   });