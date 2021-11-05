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

/* sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--photo-gallery--teaser.html.twig */
class __TwigTemplate_7553c5fb0313dca3c89b2f1b8727b79107c6e9f7dcd5ad206805510725042047 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 70];
        $filters = ["clean_class" => 73, "escape" => 78, "date" => 95];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['clean_class', 'escape', 'date'],
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
        $context["classes"] = [0 => "photo-gallery", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 73
($context["node"] ?? null), "bundle", [])))), 3 => ((        // line 74
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 77
        echo "
<div";
        // line 78
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">

  <div class=\"photo-gallery__image\">
    ";
        // line 81
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_photo_image", []), 0, [], "array")), "html", null, true);
        echo "
  </div>

  <div class=\"photo-gallery__wrapper\">

    <div class=\"photo-gallery__title\">
    ";
        // line 87
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null)), "html", null, true);
        echo "
    </div>

    <div class=\"photo-gallery__bottom\">
      <div class=\"news-teaser__statistics\">
        ";
        // line 92
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["statistics"] ?? null)), "html", null, true);
        echo "
      </div>
      <div class=\"photo-gallery__created\">
        <span>";
        // line 95
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "getCreatedTime", [], "method")), "d.m.Y"), "html", null, true);
        echo "</span>  
      </div>
    </div>

  </div>
  <a href=\"";
        // line 100
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\" class=\"photo-gallery__link\">
    <span class=\"photo-gallery__hover-text\">
     ";
        // line 102
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_photo_text", [])), "html", null, true);
        echo "
    </span>
  </a>
  
</div>

";
        // line 110
        echo "
";
        // line 113
        echo "
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--photo-gallery--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 113,  113 => 110,  104 => 102,  99 => 100,  91 => 95,  85 => 92,  77 => 87,  68 => 81,  62 => 78,  59 => 77,  57 => 74,  56 => 73,  55 => 70,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--photo-gallery--teaser.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--photo-gallery--teaser.html.twig");
    }
}
