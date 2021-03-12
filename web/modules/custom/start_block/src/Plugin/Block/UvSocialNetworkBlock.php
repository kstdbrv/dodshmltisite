<?php

namespace Drupal\start_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * class MenuUserAnonymousBlock
 *
 * *@packege Drupal\start_block\Plugin\Block
 * @Block(
 *   id = "uv_socail_network",
 *   admin_label = "uv_socail_network",
 *   category = @Translation("start_block")
 * )
 */
class MenuUserAnonymousBlock extends BlockBase {

  public function build() {
    return [
      '#theme' => 'uv_social_network'
    ];
  }
}