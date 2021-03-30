<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/default/themes/custom/start_theme/templates/content/node--news--teaser.html.twig */
class __TwigTemplate_8953790cf6ad896946f952ce83731bf8b9e6a5d7102a5285daa0e24121113e8e extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 70
        $context["classes"] = [0 => "news-teaser", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 73
($context["node"] ?? null), "bundle", [], "any", false, false, true, 73), 73, $this->source))), 3 => ((        // line 74
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 74, $this->source)))) : (""))];
        // line 77
        echo "
<article";
        // line 78
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 78), 78, $this->source), "html", null, true);
        echo ">
  <div class=\"news-teaser__image\">
  ";
        // line 80
        $context["field_image_news"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image_news", [], "any", false, false, true, 80), 80, $this->source));
        // line 81
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_image_news"] ?? null))) {
            // line 82
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image_news"] ?? null), 82, $this->source), "html", null, true);
            echo "
  ";
        } else {
            // line 84
            echo "    <div class=\"news-teaser__no-img\"></div>
  ";
        }
        // line 86
        echo "  </div>
  <div class=\"news-teaser__wrapper\">
    <div class=\"news-teaser__title\">
      ";
        // line 89
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 89, $this->source), "html", null, true);
        echo "
    </div>
    ";
        // line 91
        $context["field_tegs"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_tegs", [], "any", false, false, true, 91), 91, $this->source));
        // line 92
        echo "      ";
        if (twig_length_filter($this->env, ($context["field_tegs"] ?? null))) {
            // line 93
            echo "      <div class=\"news-teaser__tags\">
        ";
            // line 94
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_tegs", [], "any", false, false, true, 94), 94, $this->source), "html", null, true);
            echo "
      </div>
      ";
        }
        // line 97
        echo "    <div class=\"news-teaser__bottom\">
      <div class=\"news-teaser__comments\">
        0 
      </div>
      <div class=\"news-teaser__created\">
        <span>";
        // line 102
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "node", [], "any", false, false, true, 102), "getCreatedTime", [], "method", false, false, true, 102), 102, $this->source), "d.m.Y"), "html", null, true);
        echo "</span>  
      </div>
    </div>
  </div>

  <a href=\"";
        // line 107
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 107, $this->source), "html", null, true);
        echo "\" class=\"news-teaser__link\">
    <span class=\"news-teaser__hover-text\">Смотреть новость</span>
  </a>
  
</article>

";
        // line 115
        echo "
";
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/content/node--news--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 115,  105 => 107,  97 => 102,  90 => 97,  84 => 94,  81 => 93,  78 => 92,  76 => 91,  71 => 89,  66 => 86,  62 => 84,  56 => 82,  53 => 81,  51 => 80,  46 => 78,  43 => 77,  41 => 74,  40 => 73,  39 => 70,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Bartik's theme implementation to display a node.
 *
 * Available variables:
 * - node: The node entity with limited access to object properties and methods.
 *   Only method names starting with \"get\", \"has\", or \"is\" and a few common
 *   methods such as \"id\", \"label\", and \"bundle\" are available. For example:
 *   - node.getCreatedTime() will return the node creation timestamp.
 *   - node.hasField('field_example') returns TRUE if the node bundle includes
 *     field_example. (This does not indicate the presence of a value in this
 *     field.)
 *   - node.isPublished() will return whether the node is published or not.
 *   Calling other methods, such as node.delete(), will result in an exception.
 *   See \\Drupal\\node\\Entity\\Node for a full list of public properties and
 *   methods for the node object.
 * - label: (optional) The title of the node.
 * - content: All node items. Use {{ content }} to print them all,
 *   or print a subset such as {{ content.field_example }}. Use
 *   {{ content|without('field_example') }} to temporarily suppress the printing
 *   of a given child element.
 * - author_picture: The node author user entity, rendered using the \"compact\"
 *   view mode.
 * - metadata: Metadata for this node.
 * - date: (optional) Themed creation date field.
 * - author_name: (optional) Themed author name field.
 * - url: Direct URL of the current node.
 * - display_submitted: Whether submission information should be displayed.
 * - attributes: HTML attributes for the containing element.
 *   The attributes.class element may contain one or more of the following
 *   classes:
 *   - node: The current template type (also known as a \"theming hook\").
 *   - node--type-[type]: The current node type. For example, if the node is an
 *     \"Article\" it would result in \"node--type-article\". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node--view-mode-[view_mode]: The View Mode of the node; for example, a
 *     teaser would result in: \"node--view-mode-teaser\", and
 *     full: \"node--view-mode-full\".
 *   The following are controlled through the node publishing options.
 *   - node--promoted: Appears on nodes promoted to the front page.
 *   - node--sticky: Appears on nodes ordered above other non-sticky nodes in
 *     teaser listings.
 *   - node--unpublished: Appears on unpublished nodes visible only to site
 *     admins.
 * - title_attributes: Same as attributes, except applied to the main title
 *   tag that appears in the template.
 * - content_attributes: Same as attributes, except applied to the main
 *   content tag that appears in the template.
 * - author_attributes: Same as attributes, except applied to the author of
 *   the node tag that appears in the template.
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 * - view_mode: View mode; for example, \"teaser\" or \"full\".
 * - teaser: Flag for the teaser state. Will be true if view_mode is 'teaser'.
 * - page: Flag for the full page state. Will be true if view_mode is 'full'.
 * - readmore: Flag for more state. Will be true if the teaser content of the
 *   node cannot hold the main body content.
 * - logged_in: Flag for authenticated user status. Will be true when the
 *   current user is a logged-in member.
 * - is_admin: Flag for admin user status. Will be true when the current user
 *   is an administrator.
 *
 * @see template_preprocess_node()
 */
#}
{%
  set classes = [
    'news-teaser',
    'node',
    'node-' ~ node.bundle|clean_class,
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

<article{{ attributes.addClass(classes) }}>
  <div class=\"news-teaser__image\">
  {% set field_image_news = content.field_image_news|render %}
    {% if field_image_news|length %}
      {{ field_image_news }}
  {% else %}
    <div class=\"news-teaser__no-img\"></div>
  {% endif %}
  </div>
  <div class=\"news-teaser__wrapper\">
    <div class=\"news-teaser__title\">
      {{ label }}
    </div>
    {% set field_tegs = content.field_tegs|render %}
      {% if field_tegs|length %}
      <div class=\"news-teaser__tags\">
        {{ content.field_tegs }}
      </div>
      {% endif %}
    <div class=\"news-teaser__bottom\">
      <div class=\"news-teaser__comments\">
        0 
      </div>
      <div class=\"news-teaser__created\">
        <span>{{ content.node.getCreatedTime()|date(\"d.m.Y\") }}</span>  
      </div>
    </div>
  </div>

  <a href=\"{{ url }}\" class=\"news-teaser__link\">
    <span class=\"news-teaser__hover-text\">Смотреть новость</span>
  </a>
  
</article>

{# {{ content|without('field_image_news') }} #}
{# {% if pathToPhoto|length == null %} #}

{# Лучше всего его через препроцесс или ещё как вбросить туда
\$entity->get('FIELD_WITH_COMMENTS')->comment_count #}", "sites/default/themes/custom/start_theme/templates/content/node--news--teaser.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/content/node--news--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 70, "if" => 81);
        static $filters = array("clean_class" => 73, "escape" => 78, "render" => 80, "length" => 81, "date" => 102);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'render', 'length', 'date'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

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
}
