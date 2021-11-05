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

/* sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig */
class __TwigTemplate_3d20dbe206692c2231e1e1efd17066db806c742011dbb228c14229fbc2904025 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 70, "if" => 95];
        $filters = ["clean_class" => 73, "escape" => 78, "date" => 84, "render" => 94, "length" => 95];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'date', 'render', 'length'],
                []
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
        // line 70
        $context["classes"] = [0 => "news-teaser", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 73
($context["node"] ?? null), "bundle", [])))), 3 => ((        // line 74
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 77
        echo "
<article";
        // line 78
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  <h3 class=\"news-teaser__title\">
     ";
        // line 80
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null)), "html", null, true);
        echo "
  </h3>
  <div class=\"news-teaser__container\">
    <div class=\"news-teaser__created\">
      <span>";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "getCreatedTime", [], "method")), "d.m.Y"), "html", null, true);
        echo "</span>  
    </div>
    <div class=\"news-teaser__statistics\">
     ";
        // line 87
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["statistics"] ?? null)), "html", null, true);
        echo "
   </div>
  </div> 

<div class=\"news-teaser__wrapper\">
  <div class=\"news-teaser__image\">
  <a href=\"";
        // line 93
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\">
  ";
        // line 94
        $context["field_image_news"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_image_news", [])));
        // line 95
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_image_news"] ?? null))) {
            // line 96
            echo "      ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image_news"] ?? null)), "html", null, true);
            echo "
  ";
        } else {
            // line 98
            echo "  <div class=\"news-teaser__no-img\"></div>
    ";
        }
        // line 100
        echo "    </a>
  </div>
  <div class=\"news-teaser__text\">
    ";
        // line 103
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_text", [])), "html", null, true);
        echo "
    <a href=\"";
        // line 104
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\" class=\"news-teaser__link\">
      <span class=\"news-teaser__hover-text\">Смотреть новость</span>
    </a>
  </div>

</div>
  
</article>

";
        // line 115
        echo "
";
        // line 118
        echo "
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 118,  129 => 115,  117 => 104,  113 => 103,  108 => 100,  104 => 98,  98 => 96,  95 => 95,  93 => 94,  89 => 93,  80 => 87,  74 => 84,  67 => 80,  62 => 78,  59 => 77,  57 => 74,  56 => 73,  55 => 70,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh03.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig");
    }
}
