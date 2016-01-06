'use strict';

/**
 * Configuration de l'environnement
 * @type {{baseTemplateDir: string, templatePath: Function}}
 */
module.exports = {
  baseTemplateDir: '/views/',

  templatePath: function (view) {
    return [this.baseTemplateDir, view].join('');
  }
};