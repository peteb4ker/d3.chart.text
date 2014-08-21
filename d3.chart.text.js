/*!
 * @copyright Copyright (c) 2014 Sentient Energy, Inc.
 * @license   Licensed under MIT license
 */
(function (d3) {
    /**
     * __Text chart component for ```d3.chart``` v0.2__
     *
     * Renders an text element on a chart. Intended to be attached to a base element
     * which is appropriately transformed by the parent chart.
     *
     * @namespace d3.chart
     * @class Text
     * @author Pete Baker
     * @version 0.1.0
     */
    d3.chart("Text", {

        /**
         * @constructor
         * @param {Object} [options] Chart constructor options
         * @param {String} [options.text] The text string. Defaults to "Text"
         * @param {String} [options.title] The hover tooltip/title string. Defaults to ""
         */
        initialize: function(options) {
            var chart = this;

            //merge default and specified options
            chart.options = $.extend({
                text: "Text",
                title: ""
            }, options);

            console.log("[d3.chart.test] initialize '%s'", chart.options.text);

            chart.text = chart.base.append("text")
                                   .classed("title", true)
                                   .text(chart.options.text);

            chart.title = chart.base.append("title")
                                    .text(chart.options.title);
        }
    });
}(d3));