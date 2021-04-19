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

/* sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page.html.twig */
class __TwigTemplate_ab372e575c0a39dee5f3dfb724db2d0e4b57765d426bd6940917a4cfa9f3bd0a extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 8];
        $functions = ["url" => 103];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['url']
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
        echo "<div class=\"wrap-oo\">
\t<div class=\"oo\">
      \t<header>
\t\t\t\t<div class=\"header_up\">
\t  \t\t\t<div class=\"container\">
          \t\t\t<div class=\"row\">
            \t\t\t
\t\t\t\t\t\t\t";
        // line 8
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_up", [])), "html", null, true);
        echo "
             \t\t\t
           \t\t\t</div>
          \t\t</div>
\t\t\t</div>
        \t<div class=\"header_top\">
\t  \t\t\t<div class=\"container\">
          \t\t\t<div class=\"row\">
            \t\t\t
\t\t\t\t\t\t\t";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_top", [])), "html", null, true);
        echo "
             \t\t\t
           \t\t\t</div>
          \t\t</div>
\t\t\t</div>
\t\t\t<div class=\"header_center bgcolor_darkBlue\">
\t\t\t\t<div class=\"container vs\">
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-md-2\">
\t\t\t\t\t\t\t";
        // line 26
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_left", [])), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"col-md-8\">
\t\t\t\t\t\t\t";
        // line 29
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header_center", [])), "html", null, true);
        echo "
\t\t\t\t\t\t</div>
\t\t            \t<div class=\"col-md-2 key\">
\t\t            \t\t<a  class=\"vs_panel\" href=\"#\" title=\"Версия для слабовидящих\">
\t\t\t\t\t<span class=\"vs_img\"></span>
                            </a>
\t\t\t\t<a class=\"search_btn\" href=\"/search\" title=\"Поиск\"></a>
\t\t\t\t\t\t\t";
        // line 36
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
        // line 45
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
        // line 55
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "nav_top", [])), "html", null, true);
        echo "
                          
\t\t\t </div>\t
\t\t\t</div>
\t\t</nav>
\t\t<!--main-->
        <div class=\"main\">
\t\t\t<div class=\"container\" role=\"main\">
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t\t<div class=\"sidebar left_sidebar\">
\t\t\t\t\t\t\t";
        // line 66
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system_menu", [])), "html", null, true);
        echo "
\t\t\t\t\t\t\t";
        // line 67
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "left_sidebar", [])), "html", null, true);
        echo "
\t                \t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-md-6 content\">
\t\t\t\t\t\t";
        // line 71
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "system", [])), "html", null, true);
        echo "
\t\t\t\t\t\t<div class=\"vs_voice\"><div class=\"main_top\">";
        // line 72
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "main_top", [])), "html", null, true);
        echo "</div>";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-md-3\">
\t\t\t\t\t\t<div class=\"sidebar right_sidebar\">
\t\t                    ";
        // line 76
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "right_sidebar", [])), "html", null, true);
        echo "
\t\t                </div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
     \t</div>
             
            
             
            
             
            
             <div class=\"screen screen_8\">
                <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 94
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_8", [])), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>

             </div>
              <div class=\"line_img line_img_3\">
              <img src=\"";
        // line 103
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getUrl("<front>"));
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null)), "html", null, true);
        echo "/images/oblbgb.png\">
             </div>

             <div class=\"screen screen_9\">
              <div class=\"container\">
               <div class=\"row\">
                <div class=\"col-md-12\">
               <div class=\"wrap\">

                 ";
        // line 112
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "screen_9", [])), "html", null, true);
        echo "

               </div>
               </div>
              </div>
             </div>
             </div>
\t
\t</div> <!-- oo -->
</div>
<div id=\"button-up\">
<span class=\"button-up-txt\">Наверх ^</span>
</div>


";
    }

    public function getTemplateName()
    {
        return "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  213 => 112,  200 => 103,  188 => 94,  167 => 76,  158 => 72,  154 => 71,  147 => 67,  143 => 66,  129 => 55,  116 => 45,  104 => 36,  94 => 29,  88 => 26,  76 => 17,  64 => 8,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page.html.twig", "/var/www/dodshmultisite/sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/page.html.twig");
    }
}
