<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/page.html.twig */
class __TwigTemplate_347c6d2d20dc1b8f346b64d4d3962129ccb5cfbc4b548538e24dfa0955223a35 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 20];
        $filters = ["escape" => 3];
        $functions = ["attach_library" => 3, "active_theme_path" => 17, "path" => 28];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                ['attach_library', 'active_theme_path', 'path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "
";
        // line 3
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("start_search_vue/main"), "html", null, true);
        echo "

<header class=\"header\">

  <div class=\"header__top top-header\">
    <div class=\"container\">
      <div class=\"top-header__column\">
       ";
        // line 10
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top_left", [])), "html", null, true);
        echo "
       ";
        // line 12
        echo "       <div id=\"vue-search\"></div>
      </div>
      <div class=\"top-header__column\">
        <div class=\"top-header__icons\">
         <a class=\"icon-impaired vs_panel bvi-open\" href=\"#\" title=\"Версия для слабовидящих\" itemprop=\"copy\">
           <img src=";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/eye.png"), "html", null, true);
        echo " alt=\"Версия для слабовидящих\">
         </a>

         ";
        // line 20
        if ((($context["logged_in"] ?? null) == false)) {
            // line 21
            echo "       <!-- Modal Trigger -->
         <a data-fancybox data-src=\"#modal_login\" href=\"javascript:;\" class=\"modal-trigger\" title=\"вход на сайт\">
           <img src=";
            // line 23
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/login.png"), "html", null, true);
            echo " alt=\"Вход на сайт\">
         </a>
         ";
        }
        // line 26
        echo "
         ";
        // line 27
        if (($context["logged_in"] ?? null)) {
            // line 28
            echo "         <a class=\"link-unregister\" title=\"выход\" href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.logout"));
            echo "\"><img src=";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/logout.svg"), "html", null, true);
            echo " alt=\"выход\"></a>
         ";
        }
        // line 30
        echo "        </div>
       </div>
    </div>
  </div>

<div class=\"header__center center-header container\">
  <div class=\"center-header__column\">
    <div class=\"center-header__logo\">
      ";
        // line 38
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_logo", [])), "html", null, true);
        echo "
       </div>
    <div class=\"center-header__name\">
      ";
        // line 41
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_name", [])), "html", null, true);
        echo "
    </div>
  </div>
  <div class=\"center-header__column\">
    <div class=\"center-header__contacts\">
      ";
        // line 46
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_contacts", [])), "html", null, true);
        echo "
    </div> 
    <div class=\"center-header__flags\">
      ";
        // line 49
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_flags", [])), "html", null, true);
        echo "
    </div> 
  </div>
</div>

  <div class=\"header__bottom bottom-header\">
    <div class=\"bottom-header__menu\">
      ";
        // line 56
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "menu", [])), "html", null, true);
        echo "
     </div> 
     <div class=\"bottom-header__burger container\">
       <p class=\"icon-menu\">МЕНЮ</p>
       <div class=\"icon-menu\">
         <span></span>
         <span></span> ";
        // line 63
        echo "         <span></span>
       </div>
     </div>
  </div>
     
</header>

";
        // line 70
        if ($this->getAttribute(($context["page"] ?? null), "system", [])) {
            // line 71
            echo "<section class=\"system\">
  <div class=\"container\">
    ";
            // line 73
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 77
        echo "
";
        // line 78
        if ($this->getAttribute(($context["page"] ?? null), "slider", [])) {
            // line 79
            echo "<section class=\"slider-banner\">
  ";
            // line 80
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "slider", [])), "html", null, true);
            echo "
</section>
";
        }
        // line 83
        echo "
<section class=\"container section-1\">
    <div class=\"section-1__content content-section-1 vs_voice\">
      ";
        // line 86
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_1", [])), "html", null, true);
        echo "
    </div>
    <div class=\"section-1__main-menu menu-main\">
      ";
        // line 89
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_menu", [])), "html", null, true);
        echo "
      <div class=\"section-1__banners\">
        ";
        // line 91
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "custom_banners", [])), "html", null, true);
        echo "
      </div>
    </div>
</section>

<section class=\"banners-custom\">
  <div class=\"banners-custom__inner container\"></div>
</section>

";
        // line 100
        if ($this->getAttribute(($context["page"] ?? null), "section_3", [])) {
            // line 101
            echo "<section class=\"section-3\">
  <div class=\"container-padding\">
  ";
            // line 103
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_3", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 107
        echo "
";
        // line 108
        if ($this->getAttribute(($context["page"] ?? null), "section_4", [])) {
            // line 109
            echo "<section class=\"section-4\">
  <div class=\"container-padding\">
  ";
            // line 111
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_4", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 115
        echo "
";
        // line 116
        if ($this->getAttribute(($context["page"] ?? null), "section_5", [])) {
            // line 117
            echo "<section class=\"section-5\">
  <div class=\"container-padding\">
  ";
            // line 119
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_5", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 123
        echo "
";
        // line 124
        if ($this->getAttribute(($context["page"] ?? null), "section_6", [])) {
            // line 125
            echo "<section class=\"section-6\">
  <div class=\"container-padding\">
  ";
            // line 127
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_6", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 131
        echo "
";
        // line 132
        if ($this->getAttribute(($context["page"] ?? null), "section_7", [])) {
            // line 133
            echo "<section class=\"section-7\">
  <div class=\"container-padding\">
  ";
            // line 135
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_7", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 139
        echo "
";
        // line 140
        if ($this->getAttribute(($context["page"] ?? null), "section_8", [])) {
            // line 141
            echo "<section class=\"section-8\">
  <div class=\"container-padding\">
  ";
            // line 143
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_8", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 147
        echo "
";
        // line 148
        if ($this->getAttribute(($context["page"] ?? null), "section_9", [])) {
            // line 149
            echo "<section class=\"section-9\">
  <div class=\"container-padding\">
  ";
            // line 151
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_9", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 155
        echo "
<footer class=\"footer\">
 <div class=\"footer__top top-footer container\">
  <div class=\"top-footer__left\">
   ";
        // line 159
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_top", [])), "html", null, true);
        echo "
  </div>
  <div class=\"top-footer__right\">
   <div style=\"position:relative;overflow:hidden;\"><a href=\"https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps\" style=\"color:#eee;font-size:12px;position:absolute;top:0px;\">Краснодар</a><a href=\"https://yandex.ru/maps/profile?ll=38.963168%2C45.069047&utm_medium=mapframe&utm_source=maps&z=16\" style=\"color:#eee;font-size:12px;position:absolute;top:14px;\">Яндекс.Карты</a><iframe src=\"https://yandex.ru/map-widget/v1/-/CCU4i0RddB\" width=\"100%\" height=\"390px\" frameborder=\"0\" allowfullscreen=\"true\" style=\"position:relative;\"></iframe></div>
  </div>
 </div>
 <div class=\"bottom-footer\">
    <a class=\"line\" href=\"/privacy-policy\">Политика конфиденциальности</a>
    <a class=\"popup_cookie__info\" href=\"#\">Использование Cookie</a> 
 </div>

</footer>


  <!-- modal_login Structure -->
<div id=\"modal_login\" class=\"modal\">
  <div class=\"modal-content\">
      <form class=\"user-login-form antibot\" data-drupal-selector=\"user-login-form\" data-action=\"/user/login\" action=\"/user/login\" method=\"post\" id=\"user-login-form\" accept-charset=\"UTF-8\">
        <noscript>
          <div class=\"antibot-no-js antibot-message antibot-message-warning\">Вы должны включить JavaScript чтобы использовать эту форму.</div>
        </noscript>
        
        <label class=\"js-form-required form-required active\">Имя пользователя</label>
        <input autocorrect=\"none\" autocapitalize=\"none\" spellcheck=\"false\" autofocus=\"autofocus\" data-drupal-selector=\"edit-name\" aria-describedby=\"edit-name--description\" type=\"text\" id=\"edit-name\" name=\"name\" value=\"\" size=\"60\" maxlength=\"60\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите имя пользователя\">

        <label for=\"edit-pass\" class=\"js-form-required form-required active\">Пароль</label>
        <input data-drupal-selector=\"edit-pass\" aria-describedby=\"edit-pass--description\" type=\"password\" id=\"edit-pass\" name=\"pass\" size=\"60\" maxlength=\"128\" class=\"form-text required\" required=\"required\" aria-required=\"true\" placeholder=\"введите пароль\">

        <input data-drupal-selector=\"edit-user-login-form\" type=\"hidden\" name=\"form_id\" value=\"user_login_form\">
        
        <input data-drupal-selector=\"edit-antibot-key\" type=\"hidden\" name=\"antibot_key\" value=\"bUcEpvn70wYuyn-OQ8_zbOdLXsI15V0oE8hkQKaU4z8\">

  <div class=\"modal-footer\">
    <button type=\"submit\" class=\"waves-effect waves-light btn modal-trigger\">
       войти
    </button>
   </div>
  </form>
 </div>
</div>


";
        // line 202
        echo "<div class=\"button-up\" title=\"вверх\"></div>";
    }

    public function getTemplateName()
    {
        return "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  383 => 202,  338 => 159,  332 => 155,  325 => 151,  321 => 149,  319 => 148,  316 => 147,  309 => 143,  305 => 141,  303 => 140,  300 => 139,  293 => 135,  289 => 133,  287 => 132,  284 => 131,  277 => 127,  273 => 125,  271 => 124,  268 => 123,  261 => 119,  257 => 117,  255 => 116,  252 => 115,  245 => 111,  241 => 109,  239 => 108,  236 => 107,  229 => 103,  225 => 101,  223 => 100,  211 => 91,  206 => 89,  200 => 86,  195 => 83,  189 => 80,  186 => 79,  184 => 78,  181 => 77,  174 => 73,  170 => 71,  168 => 70,  159 => 63,  150 => 56,  140 => 49,  134 => 46,  126 => 41,  120 => 38,  110 => 30,  102 => 28,  100 => 27,  97 => 26,  91 => 23,  87 => 21,  85 => 20,  79 => 17,  72 => 12,  68 => 10,  58 => 3,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/page.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/page.html.twig");
    }
}
