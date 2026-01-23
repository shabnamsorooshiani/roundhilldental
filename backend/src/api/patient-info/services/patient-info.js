'use strict';

/**
 * patient-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-info.patient-info');
