// ==UserScript==
// @name         Blur Canvas Grades
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically blur grades in the Recent Feedback section on Canvas LMS
// @author       sonntt
// @match        https://lms.vinschool.edu.vn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to blur grades
    const blurGrades = () => {
        const feedbackElements = document.querySelectorAll('.recent_feedback_icon'); // Adjust selector as needed
        feedbackElements.forEach(element => {
            element.style.transition = 'filter 0.2s ease';
            element.style.filter = 'blur(3px)';
            element.addEventListener('mouseover', function() {
                element.style.filter = 'blur(0)';
            });
            element.addEventListener('mouseout', function() {
                element.style.filter = 'blur(3px)';
            });
        });
    };

    // Run blurGrades when the page loads
    window.addEventListener('load', blurGrades);
    
    // Mutation observer to handle dynamic content updates
    const observer = new MutationObserver(blurGrades);
    observer.observe(document.body, { childList: true, subtree: true });
})();
