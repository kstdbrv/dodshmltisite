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

/* sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page--front.html.twig */
class __TwigTemplate_a3ba5869d5f4af0cbe05cdac414624616b6dc3a5b295165a1c336d7e115fc452 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 2];
        $functions = ["attach_library" => 2, "url" => 88];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['attach_library', 'url']
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
        // line 2
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("start_search_vue/main"), "html", null, true);
        echo "
<div class=\"wrap-oo\">
\t<div class=\"oo\">
      \t<header>
        <div class=\"header_up\">
\t  \t\t\t<div class=\"container\">
          
          \t\t\t<div class=\"row\">
            \t\t\t
\t\t\t\t\t\t\t";
        // line 11
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_up", [])), "html", null, true);
        echo "
             \t\t\t<div id=\"vue-search\"></div>
           \t\t\t</div>
          \t\t</div>
\t\t\t</div>
        \t<div class=\"header_top\"> 
\t  \t\t\t <div class=\"container\"> 
          \t\t\t<div class=\"row\">
\t\t\t\t\t\t\t";
        // line 19
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top", [])), "html", null, true);
        echo "
             \t\t\t
           \t\t\t </div>
          \t\t</div> 
\t\t\t</div> 
\t\t\t<div class=\"header_center bgcolor_darkBlue\">
\t\t\t\t<div class=\"container vs\">
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-md-2\">
\t\t\t\t\t\t\t";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_left", [])), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-md-8\">
\t\t\t\t\t\t\t";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center", [])), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t            \t<div class=\"col-md-2 key\">
\t\t            \t\t<a  class=\"vs_panel\" href=\"#\" title=\"Версия для слабовидящих\">
\t\t\t\t\t<span class=\"vs_img\"></span>
                            </a>
\t\t\t\t<a class=\"search_btn\" href=\"/search\" title=\"Поиск\"></a>
\t\t\t\t\t\t\t";
        // line 38
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_right", [])), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t    </div>
\t\t    <div class=\"header_info\">
\t\t        <div class=\"container\">
\t\t            <div class=\"row\">
\t\t            \t<div class=\"col-md-12\">
\t\t                \t";
        // line 47
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_info", [])), "html", null, true);
        echo "
\t\t             \t</div>
\t\t            </div>
\t\t         </div>
\t\t    </div>
\t\t</header>\t
        <nav class=\"top_menu bgcolor_darkBlue\">
\t  \t\t<div class=\"container\">        
\t\t\t  <div class=\"row\">       
\t\t\t\t\t";
        // line 56
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "nav_top", [])), "html", null, true);
        echo "        
\t\t\t </div>\t
\t\t\t</div>
\t\t</nav>
\t\t<!--main-->
                <div class=\"main\">
\t\t<div class=\"container\" role=\"main\">
\t\t\t<div class=\"row\">
\t\t\t\t<div class=\"col-lg-3\">
\t\t\t\t\t<div class=\"sidebar left_sidebar\">
\t\t\t\t\t\t";
        // line 66
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system_menu", [])), "html", null, true);
        echo "
\t\t\t\t\t\t";
        // line 67
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "left_sidebar", [])), "html", null, true);
        echo "
                \t</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-lg-6 content\">
\t\t\t\t\t";
        // line 71
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system", [])), "html", null, true);
        echo "
\t\t\t\t\t<div class=\"vs_voice\"><div class=\"main_top\">";
        // line 72
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "main_top", [])), "html", null, true);
        echo "</div>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "</div>
\t\t\t\t</div>
\t\t\t\t<div class=\"col-lg-3 banners-custom\">
\t\t\t\t\t<div class=\"sidebar  banners-custom__inner right_sidebar\">
\t                    ";
        // line 76
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "right_sidebar", [])), "html", null, true);
        echo "
\t                </div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
               </div>
             <div class=\"screen screen_1\">
               <div class=\"wrap\">
                 ";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_1", [])), "html", null, true);
        echo "
               </div>
             </div>
             <div class=\"line_img\">
              <img src=\"";
        // line 88
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("<front>"));
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/oblbgt.png\">
             </div>
             <div class=\"screen screen_2\">
               <div class=\"wrap\">
                 ";
        // line 92
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_2", [])), "html", null, true);
        echo "
               </div>
             </div>
             <div class=\"screen screen_3\">
               <div class=\"container\">
                <div class=\"row\">
                  <div class=\"wrap2\">
                  ";
        // line 99
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_3", [])), "html", null, true);
        echo "
                  </div>
                </div>
               </div>
             </div>
             <div class=\"screen screen_4\">
               <div class=\"wrap\">
                 ";
        // line 106
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_4", [])), "html", null, true);
        echo "
               </div>
             </div>
              <div class=\"line_img line_img_2\">
                <img src=\"";
        // line 110
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("<front>"));
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_5\">
               <div class=\"wrap\">
                 ";
        // line 115
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_5", [])), "html", null, true);
        echo "
               </div>
             </div>
             <div class=\"screen screen_6\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 124
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_6", [])), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_7\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 138
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_7", [])), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
             <div class=\"screen screen_8\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 152
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_8", [])), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
              <div class=\"line_img line_img_3\">
              <img src=\"";
        // line 161
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("<front>"));
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_9\">
              <div class=\"container footer__top\">
              <div class=\"top-footer__left\">
              ";
        // line 167
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer__left", [])), "html", null, true);
        echo "
              </div>
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">
   <div class=\"top-footer__right\"><div style=\"position:relative;overflow:hidden;\"><a href=\"https://yandex.ru/maps/?um=constructor%3Afebb29803c2cc5900cd6d25288bc87c242958b067e3dafb172930edce706e164&source=constructorLink\"></a><iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Afebb29803c2cc5900cd6d25288bc87c242958b067e3dafb172930edce706e164&amp;source=constructor\" width=\"1170\" height=\"370\" frameborder=\"0\"></iframe></div></div>  
               </div>
               </div>
              </div>
             </div>
             </div>
\t
\t</div> <!-- oo -->
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
      <a class=\"popup_cookie__info\" href=\"/privacy-policy\">Политика конфиденциальности |</a>
      <a class=\"popup_cookie__info\" href=\"#\">| Использование Cookie</a>
     </div>
    </div>
 </div>
</div>
<div id=\"button-up\">
<span class=\"button-up-txt\">Наверх ^</span>
</div>


";
    }

    public function getTemplateName()
    {
        return "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  317 => 184,  297 => 167,  287 => 161,  275 => 152,  258 => 138,  241 => 124,  229 => 115,  220 => 110,  213 => 106,  203 => 99,  193 => 92,  185 => 88,  178 => 84,  167 => 76,  158 => 72,  154 => 71,  147 => 67,  143 => 66,  130 => 56,  118 => 47,  106 => 38,  96 => 31,  90 => 28,  78 => 19,  67 => 11,  55 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page--front.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page--front.html.twig");
    }
}
