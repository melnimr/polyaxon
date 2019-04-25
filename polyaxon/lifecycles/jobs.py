from hestia.unknown import UNKNOWN

from lifecycles.statuses import BaseStatuses, StatusOptions


class JobLifeCycle(BaseStatuses):
    CREATED = StatusOptions.CREATED
    BUILDING = StatusOptions.BUILDING
    UNSCHEDULABLE = StatusOptions.UNSCHEDULABLE
    WARNING = StatusOptions.WARNING
    SCHEDULED = StatusOptions.SCHEDULED
    RESUMING = StatusOptions.RESUMING
    RUNNING = StatusOptions.RUNNING
    SUCCEEDED = StatusOptions.SUCCEEDED
    FAILED = StatusOptions.FAILED
    UPSTREAM_FAILED = StatusOptions.UPSTREAM_FAILED
    STOPPED = StatusOptions.STOPPED
    SKIPPED = StatusOptions.SKIPPED
    UNKNOWN = UNKNOWN

    CHOICES = (
        (CREATED, CREATED),
        (BUILDING, BUILDING),
        (UNSCHEDULABLE, UNSCHEDULABLE),
        (WARNING, WARNING),
        (SCHEDULED, SCHEDULED),
        (RESUMING, RESUMING),
        (RUNNING, RUNNING),
        (SUCCEEDED, SUCCEEDED),
        (FAILED, FAILED),
        (UPSTREAM_FAILED, UPSTREAM_FAILED),
        (STOPPED, STOPPED),
        (SKIPPED, SKIPPED),
        (UNKNOWN, UNKNOWN),
    )

    VALUES = {
        CREATED,
        BUILDING,
        UNSCHEDULABLE,
        WARNING,
        SCHEDULED,
        RESUMING,
        RUNNING,
        SUCCEEDED,
        FAILED,
        UPSTREAM_FAILED,
        STOPPED,
        SKIPPED,
        UNKNOWN
    }

    HEARTBEAT_STATUS = {RUNNING, }
    WARNING_STATUS = {UNSCHEDULABLE, WARNING, }
    STARTING_STATUS = {CREATED, BUILDING, }
    RUNNING_STATUS = {SCHEDULED, BUILDING, RUNNING, }
    DONE_STATUS = {FAILED, STOPPED, SKIPPED, SUCCEEDED, }
    FAILED_STATUS = {FAILED, UPSTREAM_FAILED, }

    # A job can go from scheduled to building the reason is that 2 phases of building can happen:
    # 1. Docker image building
    # 2. Kubernetes building phase
    TRANSITION_MATRIX = {
        CREATED: {None, },
        RESUMING: {CREATED, WARNING, SKIPPED, STOPPED, },
        BUILDING: {None, CREATED, RESUMING, UNSCHEDULABLE, UNKNOWN, WARNING, },
        SCHEDULED: {CREATED, BUILDING, RESUMING, UNSCHEDULABLE, UNKNOWN, WARNING, },
        RUNNING: {CREATED, SCHEDULED, RESUMING, BUILDING, UNSCHEDULABLE, UNKNOWN, WARNING, },
        UNSCHEDULABLE: VALUES - {SUCCEEDED, FAILED, SKIPPED, STOPPED, },
        SKIPPED: VALUES - DONE_STATUS,
        SUCCEEDED: VALUES - DONE_STATUS,
        FAILED: VALUES - DONE_STATUS,
        UPSTREAM_FAILED: VALUES - DONE_STATUS,
        STOPPED: VALUES - DONE_STATUS,
        WARNING: VALUES - DONE_STATUS - {WARNING, },
        UNKNOWN: VALUES - {UNKNOWN, },
    }