from rest_framework import fields, serializers

from db.models.repos import Repo, ExternalRepo


class RepoSerializer(serializers.ModelSerializer):
    project = fields.SerializerMethodField()

    class Meta:
        model = Repo
        fields = ('project', 'created_at', 'updated_at', 'is_public', )

    def get_user(self, obj):
        return obj.user.username

    def get_project(self, obj):
        return obj.project.name


class ExternalRepoSerializer(serializers.ModelSerializer):
    project = fields.SerializerMethodField()

    class Meta:
        model = ExternalRepo
        fields = ('project', 'created_at', 'updated_at', 'is_public', 'git_url',)

    def get_user(self, obj):
        return obj.user.username

    def get_project(self, obj):
        return obj.project.name
