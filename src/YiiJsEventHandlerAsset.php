<?php
/**
 * User: h.ghasempour
 * Date: 7/8/2019
 * Time: 3:36 PM
 */

namespace Hgh\YiiJsEventHandler;

use yii\web\AssetBundle;

/**
 * Class YiiJsEventHandlerAsset
 * @package Hgh\YiiJsEventHandler
 */
class YiiJsEventHandlerAsset extends AssetBundle
{
    public $sourcePath = '@vendor/hgh/yii-js-event-handler/src/res';

    public $js = [
        "js/eventHandler.js"
    ];

    public $depends = [
        'yii\web\JqueryAsset',
    ];
}