<?php

namespace Drupal\social_links\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * class MenuUserAnonymousBlock
 *
 * *@packege Drupal\start_block\Plugin\Block
 * @Block(
 *   id = "menu_user_anonymous",
 *   admin_label = "Menu User Anonymous",
 *   category = @Translation("start_block")
 * )
 */
class SocialLinksBlock extends BlockBase {

  public function build() {
    return [
      '#theme' => 'social_links'
    ];
  }
}