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

/* sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/page.html.twig */
class __TwigTemplate_608dfde35e7fc4e6d5e873506c2fc80fb8c4451eac6c7016e387adc78a12a465 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 43];
        $filters = ["escape" => 3];
        $functions = ["attach_library" => 3, "active_theme_path" => 40, "path" => 51];

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

  <div class=\"header__top top-header container\">
    <div class=\"top-header__column\">
     ";
        // line 9
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top_left", [])), "html", null, true);
        echo "
     ";
        // line 11
        echo "     <div id=\"vue-search\"></div>
    </div>
    <div class=\"top-header__column\">
      ";
        // line 14
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top_right", [])), "html", null, true);
        echo "
     </div>
  </div>

  <div class=\"header__center center-header\">
    <div class=\"container\">
      <div class=\"center-header__column\">
     <div class=\"center-header__flags\">
      ";
        // line 22
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_flags", [])), "html", null, true);
        echo "
     </div>
     <div class=\"center-header__name\">
      ";
        // line 25
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_name", [])), "html", null, true);
        echo "
     </div>
      </div>

      <div class=\"center-header__column\">
     ";
        // line 30
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_logo", [])), "html", null, true);
        echo "
      </div>

      <div class=\"center-header__column\">
    <div class=\"center-header__contacts\">
      ";
        // line 35
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center_contacts", [])), "html", null, true);
        echo "
     </div>

     <div class=\"center-header__icons\" data-da=\"bottom-header,3,1450\">
       <a class=\"icon-impaired vs_panel bvi-open\" href=\"#\" title=\"Версия для слабовидящих\" itemprop=\"copy\">
         <img src=";
        // line 40
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/eye.png"), "html", null, true);
        echo " alt=\"Версия для слабовидящих\">
       </a>

       ";
        // line 43
        if ((($context["logged_in"] ?? null) == false)) {
            // line 44
            echo "       <!-- Modal Trigger -->
       <a href=\"#modal_login\" class=\"modal-trigger\" title=\"вход на сайт\">
         <img src=";
            // line 46
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/login.png"), "html", null, true);
            echo " alt=\"Вход на сайт\">
       </a>
       ";
        }
        // line 49
        echo "
       ";
        // line 50
        if (($context["logged_in"] ?? null)) {
            // line 51
            echo "       <a class=\"link-unregister\" title=\"выход\" href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("user.logout"));
            echo "\"><img src=";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (("/" . $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getActiveThemePath()) . "/assets/images/icons/logout.svg"), "html", null, true);
            echo " alt=\"выход\"></a>
       ";
        }
        // line 53
        echo "    </div>

      </div>
    </div>
  </div>

  <div class=\"header__bottom bottom-header container\">
    <div class=\"bottom-header__menu\">
      ";
        // line 61
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "menu", [])), "html", null, true);
        echo "
     </div> 
     <div class=\"bottom-header__burger\">
       <p class=\"icon-menu\">МЕНЮ</p>
       <div class=\"icon-menu\">
         <span></span>
         <span></span> ";
        // line 68
        echo "         <span></span>
       </div>
     </div>
  </div>
     
</header>

";
        // line 75
        if ($this->getAttribute(($context["page"] ?? null), "system", [])) {
            // line 76
            echo "<section class=\"system\">
  <div class=\"container\">
    ";
            // line 78
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 82
        echo "
";
        // line 83
        if ($this->getAttribute(($context["page"] ?? null), "slider", [])) {
            // line 84
            echo "<section class=\"slider-banner\">
 <div class=\"container\">
  ";
            // line 86
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "slider", [])), "html", null, true);
            echo "
 </div>
</section>
";
        }
        // line 90
        echo "
<section class=\"container section-1\">
    <aside class=\"section-1__main-menu menu-main\">
      ";
        // line 93
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_menu", [])), "html", null, true);
        echo "
    </aside>

    <div class=\"section-1__content content-section-1 vs_voice\">
      ";
        // line 97
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_1", [])), "html", null, true);
        echo "
    </div>

    <aside class=\"section-1__banners banners-custom\">
      <div class=\"banners-custom__inner\"></din>
    </aside>
</section>

";
        // line 105
        if ($this->getAttribute(($context["page"] ?? null), "section_2_center", [])) {
            // line 106
            echo "<section class=\"section-2";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["grid"] ?? null)), "html", null, true);
            echo "\">
";
            // line 107
            if ($this->getAttribute(($context["page"] ?? null), "section_2_left", [])) {
                // line 108
                echo "  <aside class=\"section-2__left\">
    ";
                // line 109
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_2_left", [])), "html", null, true);
                echo "
  </aside>
";
            }
            // line 112
            echo "  <div class=\"section-2__content\">
    ";
            // line 113
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_2_center", [])), "html", null, true);
            echo "
  </div>
";
            // line 115
            if ($this->getAttribute(($context["page"] ?? null), "section_2_right", [])) {
                // line 116
                echo "  <aside class=\"section-2__right\">
     ";
                // line 117
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_2_right", [])), "html", null, true);
                echo "
  </aside>
";
            }
            // line 119
            echo "  
</section>
";
        }
        // line 122
        echo "
";
        // line 123
        if ($this->getAttribute(($context["page"] ?? null), "section_3", [])) {
            // line 124
            echo "<section class=\"section-3\">
  <div class=\"container-padding\">
  ";
            // line 126
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_3", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 130
        echo "
";
        // line 131
        if ($this->getAttribute(($context["page"] ?? null), "section_4", [])) {
            // line 132
            echo "<section class=\"section-4\">
  <div class=\"container-padding\">
  ";
            // line 134
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_4", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 138
        echo "
";
        // line 139
        if ($this->getAttribute(($context["page"] ?? null), "section_5", [])) {
            // line 140
            echo "<section class=\"section-5\">
  <div class=\"container-padding\">
  ";
            // line 142
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_5", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 146
        echo "
";
        // line 147
        if ($this->getAttribute(($context["page"] ?? null), "section_6", [])) {
            // line 148
            echo "<section class=\"section-6\">
  <div class=\"container-padding\">
  ";
            // line 150
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_6", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 154
        echo "
";
        // line 155
        if ($this->getAttribute(($context["page"] ?? null), "section_7", [])) {
            // line 156
            echo "<section class=\"section-7\">
  <div class=\"container-padding\">
  ";
            // line 158
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_7", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 162
        echo "
";
        // line 163
        if ($this->getAttribute(($context["page"] ?? null), "section_8", [])) {
            // line 164
            echo "<section class=\"section-8\">
  <div class=\"container-padding\">
  ";
            // line 166
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "section_8", [])), "html", null, true);
            echo "
  </div>
</section>
";
        }
        // line 170
        echo "
<footer class=\"footer\">
 <div class=\"footer__top top-footer container\">
  <div class=\"top-footer__left\">
   ";
        // line 174
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_top", [])), "html", null, true);
        echo "
  </div>
  <div class=\"top-footer__right\">
   <div style=\"position:relative;overflow:hidden;\"><a href=\"https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps\" style=\"color:#eee;font-size:12px;position:absolute;top:0px;\">Краснодар</a><a href=\"https://yandex.ru/maps/profile?ll=38.963168%2C45.069047&utm_medium=mapframe&utm_source=maps&z=16\" style=\"color:#eee;font-size:12px;position:absolute;top:14px;\">Яндекс.Карты</a><iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Afebb29803c2cc5900cd6d25288bc87c242958b067e3dafb172930edce706e164&amp;source=constructor\" width=\"1170\" height=\"370\" frameborder=\"0\" allowfullscreen=\"true\" style=\"position:relative;\"></iframe></div>  
  </div>
 </div>
  <div class=\"footer__bottom bottom-footer\">
    <div class=\"container\">
     <div class=\"bottom-footer__column\">
      <p>Сайт создан на основе шаблона МКУКМЦИКТ «Старт»</p>
      ";
        // line 184
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_bottom_left", [])), "html", null, true);
        echo "
     </div>
     <div class=\"bottom-footer__column\">
      ";
        // line 187
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_bottom_right", [])), "html", null, true);
        echo "
     </div>
     <div class=\"bottom-footer__column\">
      <a class=\"line\" href=\"/privacy-policy\">Политика конфиденциальности</a>
      <a class=\"popup_cookie__info\" href=\"#\">Использование Cookie</a>
     </div>
    </div>
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
        // line 228
        echo "<div class=\"button-up\" title=\"вверх\"></div>";
    }

    public function getTemplateName()
    {
        return "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  434 => 228,  391 => 187,  385 => 184,  372 => 174,  366 => 170,  359 => 166,  355 => 164,  353 => 163,  350 => 162,  343 => 158,  339 => 156,  337 => 155,  334 => 154,  327 => 150,  323 => 148,  321 => 147,  318 => 146,  311 => 142,  307 => 140,  305 => 139,  302 => 138,  295 => 134,  291 => 132,  289 => 131,  286 => 130,  279 => 126,  275 => 124,  273 => 123,  270 => 122,  265 => 119,  259 => 117,  256 => 116,  254 => 115,  249 => 113,  246 => 112,  240 => 109,  237 => 108,  235 => 107,  230 => 106,  228 => 105,  217 => 97,  210 => 93,  205 => 90,  198 => 86,  194 => 84,  192 => 83,  189 => 82,  182 => 78,  178 => 76,  176 => 75,  167 => 68,  158 => 61,  148 => 53,  140 => 51,  138 => 50,  135 => 49,  129 => 46,  125 => 44,  123 => 43,  117 => 40,  109 => 35,  101 => 30,  93 => 25,  87 => 22,  76 => 14,  71 => 11,  67 => 9,  58 => 3,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/page.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/page.html.twig");
    }
}
